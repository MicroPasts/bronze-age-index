const path = require(`path`)
const {paginate} = require("gatsby-awesome-pagination");

exports.createPages = ({graphql, actions}) => {
    const {createPage} = actions
    const objectTemplate = path.resolve(`src/templates/object.js`)
    const indexTemplate = path.resolve(`src/templates/bronze-age.js`)
    const profileTemplate = require.resolve(`./src/templates/profile.js`)
    const contentTemplate = require.resolve(`./src/templates/content.js`)

    return graphql(
        `{
         team: allMarkdownRemark(
        filter: {frontmatter: {section: {eq: "team"}}}
      )  {
        edges {
          node {
            id
            frontmatter {
              name
              slug
            }
          }
        }
      },
      
      posts: allMarkdownRemark(
        filter: {frontmatter: {section: {eq: "content"}}}
      )  {
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
      },
          allObjects: allSplitCsv  {
            edges {
                 node {
                    id
                    objectID
                    PASID
                    broadperiod
                    objectType
                    description
                    fourFigureLat
                    fourFigureLon
                    fromdate  
                    todate
                    notes
                    discoveryMethod
                    materialTerm
                    identifier
                    datefound1(formatString: "MMMM DD, YYYY")
                    datefound2(formatString: "MMMM DD, YYYY")
                    subsequentActionTerm
                    identifier
                    recorder
                    gridSource
                    quantity 
                    length
                    height
                    diameter
                    edge
                    thickness
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
                    thumbnail {
                        childImageSharp {
                            gatsbyImageData(
                                placeholder: TRACED_SVG
                                height: 300
                                formats: [AUTO, WEBP]
                                width: 300
                                quality: 100
                                transformOptions: { grayscale: false, fit: COVER, cropFocus: CENTER }
                            )
                        }
                    }
              }
            }
          },
          paginatedObjects: allSplitCsv {
            edges {
             node {
                id
                broadperiod
                objectType
                thumbnail {
                        childImageSharp {
                            gatsbyImageData(
                                placeholder: TRACED_SVG
                                height: 300
                                formats: [AUTO, WEBP]
                                width: 300
                                quality: 90
                                transformOptions: { grayscale: false, fit: COVER, cropFocus: CENTER }
                            )
                        }
                    }
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

        result.data.allObjects.edges.forEach(({ node }) => {
            const object = node
            console.log(object.objectID)

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
            itemsPerPage: 12,
            itemsPerFirstPage: 12,
            pathPrefix: '/records'
        });
    })
}
const { createRemoteFileNode } = require("gatsby-source-filesystem")


exports.onCreateNode = async (gatsbyUtils) => {
    const { node, actions, reporter, createNodeId, getCache } = gatsbyUtils;
    const { createNodeField, createNode } = actions;

    if (node.internal.type === `SplitCsv` &&  node.thumbnail !== '') {
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

        reporter.info(`Created image File Node for ${node.thumbnail} thumbnail url`);
    }
};

exports.createSchemaCustomization = ({ actions }) => {
    actions.createTypes(`
    type SplitCsv implements Node {
      thumbnail: File @link(from: "fields.thumbnailFileID")
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