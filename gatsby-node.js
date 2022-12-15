const path = require(`path`)
const {paginate} = require("gatsby-awesome-pagination");

exports.createPages = ({graphql, actions}) => {
    const {createPage} = actions
    const objectTemplate = path.resolve(`src/templates/object.js`)
    const indexTemplate = path.resolve(`src/templates/bronze-age.js`)
    const projectIndexTemplate = path.resolve(`src/templates/projects.js`)
    const profileTemplate = path.resolve(`src/templates/profile.js`)
    const contentTemplate = path.resolve(`src/templates/content.js`)
    const projectTemplate = path.resolve(`src/templates/project.js`)
    return graphql(
        `{
          team: allMarkdownRemark(filter: {frontmatter: {section: {eq: "team"}}}) {
            edges {
              node {
                id
                frontmatter {
                  name
                  slug
                }
              }
            }
          }
          posts: allMarkdownRemark(filter: {frontmatter: {section: {eq: "content"}}}) {
            edges {
              node {
                id
                frontmatter {
                  title
                  slug
                  author
                }
              }
            }
          }
          projects: allMarkdownRemark(filter: {frontmatter: {section: {eq: "projects"}}}) {
            edges {
              node {
                id
                html
                frontmatter {
                  title
                  description
                  flickrURL
                  micropastsURL
                  slug
                  created(formatString: "MMMM DD, YYYY")
                  coverImage
                  tasks
                }
              }
            }
          }
          allObjects: allSplitCsv(sort: {id: DESC}) {
            edges {
              node {
                id
                objectID
                PASID
                broadperiod
                objectType
                classification
                completeness
                periodo
                description
                fourFigureLat
                fourFigureLon
                fromdate
                todate
                notes
                materialTerm
                identifier
                datefound1(formatString: "MMMM DD, YYYY")
                datefound2(formatString: "MMMM DD, YYYY")
                subsequentActionTerm
                recorder
                gridSource
                quantity
                length
                height
                diameter
                edge
                thickness
                discoveryContext
                parish
                county
                district
                regionName
                country
                patina
                objectType
                surface
                other
                composition
                associations
                publications
                inputBy
                imageURL
                flickrURL
                project
                rightCorner
                collection
                site
                toSearch
                gridRef
                dateDiscoveryDay
                dateDiscoveryMonth
                dateDiscoveryYear
                remarks
                museumCollection
                museumID
                collectionIdentifier
                stolenStatus
                imageCopyrightHolder
              }
            }
          }
          paginatedObjects: allSplitCsv {
            edges {
              node {
                id
                broadperiod
                objectType
              }
            }
          }
        }`
    ).then(result => {
        if (result.errors) {
            throw result.errors
        }
        result.data.team.edges.forEach(({ node }) => {
            createPage({
                path: node.frontmatter.slug,
                component: profileTemplate,
                context: {
                    slug: node.frontmatter.slug,
                    id: node.id
                },
            });
        });


        result.data.posts.edges.forEach(({ node }) => {
            createPage({
                path: node.frontmatter.slug,
                component: contentTemplate,
                context: {
                    slug: node.frontmatter.slug,
                    id: node.id
                },
            });
        });

        result.data.projects.edges.forEach(({ node }) => {
            const slug = '/projects/' + node.frontmatter.slug
            // console.log(slug)
            const project = node
            createPage({
                path: slug,
                component: projectTemplate,
                context: {
                    ...project,
                },
            });
        });

        result.data.allObjects.edges.forEach(({ node }) => {
            const object = node
            // console.log(object.objectID)

            const slug = 'records/' + object.objectID + '/'
            createPage({
                path: slug,
                component: objectTemplate,
                context: {
                    ...object,
                },
            })
        });
        paginate({
            createPage: createPage,
            component: indexTemplate,
            items: result.data.paginatedObjects.edges,
            itemsPerPage: 24,
            itemsPerFirstPage: 24,
            pathPrefix: '/records'
        });

        paginate({
            createPage: createPage,
            component: projectIndexTemplate,
            items: result.data.projects.edges,
            itemsPerPage: 24,
            itemsPerFirstPage: 24,
            pathPrefix: '/projects'
        });
    })
}



const { createRemoteFileNode } = require("gatsby-source-filesystem")


exports.onCreateNode = async (gatsbyUtils) => {
    const { node, actions, reporter, createNodeId, getCache } = gatsbyUtils;
    const { createNodeField, createNode } = actions;

    if (node.internal.type === `SplitCsv` &&  node.thumbnail !== '') {
        try {
            const imageFile = await createRemoteFileNode({
                url: node.thumbnail,
                parentNodeId: node.id,
                getCache,
                createNode,
                createNodeId,
            });

            createNodeField({
                node,
                name: `thumbnailFileID`,
                value: imageFile.id,
            });

            // reporter.info(`Created image File Node for ${node.thumbnail} thumbnail url`);
        } catch (e) {
            // reporter.error(`Error creating image File Node for ${node.thumbnail} thumbnail url`, e);
        }
    } else if (node.internal.type === `SplitCsv` &&  node.thumbnail === '') {
        const imageFile = await createRemoteFileNode({
            url: 'https://bronze-age-index.micropasts.org/img.png',
            parentNodeId: node.id,
            getCache,
            createNode,
            createNodeId,
        });

        createNodeField({
            node,
            name: `thumbnailFileID`,
            value: imageFile.id,
        });

        reporter.info(`Created missing image File Node for ${node.id} `);
    }

    if (node.internal.type === `MarkdownRemark` &&  node.frontmatter.coverImage !== '' && node.frontmatter.section === 'projects') {
        try {
            const imageFile = await createRemoteFileNode({
                url: node.frontmatter.coverImage,
                parentNodeId: node.id,
                getCache,
                createNode,
                createNodeId,
            });

            createNodeField({
                node,
                name: `coverImageFileID`,
                value: imageFile.id,
            });

            // reporter.info(`Created coverImage File Node for ${node.frontmatter.coverImage} thumbnail url`);
        } catch (e) {
            // reporter.error(`Error creating image File Node for ${node.frontmatter.coverImage} thumbnail url`, e);
        }
    }
};

exports.createSchemaCustomization = ({ actions }) => {
    actions.createTypes(`
    type SplitCsv implements Node {
      thumbnail: File @link(from: "fields.thumbnailFileID")
    }
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      cover: File @link(from: "fields.coverImageFileID")
    }
    type Frontmatter {
      title: String!
    }
  `);
};

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html") {
        actions.setWebpackConfig({
            module: {
                rules: [
                    {
                        test: /leaflet/,
                        use: loaders.null(),
                    },
                ],
            },
        })
    }
}