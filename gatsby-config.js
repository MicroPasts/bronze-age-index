/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
const {typeNameFromDir} = require("gatsby-transformer-csv")
/**
 * Enable environment variables
 */
require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    siteMetadata: {
        title: `The Bronze Age Index`,
        description: `The Bronze Age Index is a database of archaeological metalwork implements found in the Bronze Age of the UK. This is compiled from the British Museum's collection of metalwork, and is intended to be a resource for archaeologists, historians, and anyone interested in the Bronze Age.`,
        author: `@micropasts`,
        siteUrl: `https://bronze-age-index.micropasts.org`,
        twitterHandle: '@micropasts',
        image: `/img.png`,
        og: {
            siteName: 'The Bronze Age Index',
            twitterCreator: '@micropasts',
        },
        menuLinks: [
            {
                name: 'Home',
                link: '/',
                id: 1
            },
            {
                name: 'Search the Index',
                link: '/search/',
                id: 2
            },
            {
                name: 'CitSci Projects',
                link: '/projects/',
                id: 3
            },
            {
                name: 'Mapping discovery',
                link: 'https://mapping-the-bronze-age.micropasts.org',
                id: 4
            }
        ],
        aboutLinks: [
            {
                name: 'Meet the Team',
                link: '/team',
                id: 1
            }

        ],
        logos: [
            {
                institution: 'AHRC',
                link: 'https://ahrc.ukri.org/',
                id: 4,
                image: '/logos/AHRC.jpg'
            },
            {
                institution: 'British Museum',
                link: 'https://britishmuseum.org/',
                id: 1,
                image: '/logos/bm.png'
            },
            {
                institution: 'MicroPasts',
                link: 'https://micropasts.org/',
                id: 2,
                image: '/logos/mp.jpg'
            },
            {
                institution: 'Institute of Archaeology',
                link: 'https://archaeology.ucl.ac.uk/',
                id: 3,
                image: '/logos/UCL.png'
            },


        ]
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${__dirname}/src/data/split/`,

            },
        },
        {
            resolve: `gatsby-transformer-csv`,
            options: {
                typeName: typeNameFromDir,
            },
        },
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
            __key: "images"
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "team",
                "path": "./src/team/"
            },
            __key: "team"
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "content",
                "path": "./src/markdown/"
            },
            __key: "content"
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "projects",
                "path": "./src/projects"
            },
            __key: "projects"
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [

                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 2000,
                            withWebp: true,
                            showCaptions: true,
                            quality: 90,
                            linkImagesToOriginal: false,
                            backgroundColor: `transparent`,
                            loading: `lazy`,
                        },
                    },

                ],
            },
        },
        `gatsby-plugin-twitter`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
                defaults: {},
                failOn: `none`,
                base64Width: 20,
                forceBase64Format: `jpg`, // valid formats: png,jpg,webp
                useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
                stripMetadata: false,
                defaultQuality: 80,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `bronze-age-index`,
                short_name: `bai`,
                start_url: `/`,
                background_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`,
            },
        },
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                trackingIds: [
                    "G-7K85DVTZLC",
                ],
                pluginConfig: {
                    head: true
                },
            },
        },
        {
            resolve: 'gatsby-plugin-meilisearch',
            options: {
                host: process.env.SEARCH_URL,
                apiKey: process.env.API_KEY,
                batchSize: 1000,
                indexes: [
                    {
                        indexUid: 'bai',
                        settings: {
                            searchableAttributes: ['*'],
                            filterableAttributes: ["title", "discovery", "country", "county", "projects", "museum"],
                        },
                        transformer: (data) =>
                            data.allSplitCsv.edges
                                .map(({node},i) => {
                                    console.log(node)
                                    return {
                                        id: node.id,
                                        title: node.objectType || '',
                                        objectID: node.objectID,
                                        description:  node.description || node.notes || '',
                                        period: node.broadperiod || 'Bronze Age',
                                        content: node.description || node.notes || '',
                                        discovery: node.discoveryContext || '',
                                        county: node.county || '',
                                        country: node.country || '',
                                        museum: node.museumCollection || '',
                                        thumbnail: node.publicURL,
                                        imageURL: node.imageURL || '',
                                        url: `https://bronze-age-index.micropasts.org/records/${node.objectID}`,
                                        projects: node.project || 'PAS',
                                    }
                                }),
                        query: `query getRecords {
                          allSplitCsv {
                            edges {
                              node {
                                id
                                objectID
                                broadperiod
                                objectType
                                description
                                discoveryContext
                                county
                                country
                                objectType
                                imageURL
                                project
                                museumCollection
                                imageURL
                                thumbnail {
                                    publicURL
                                }
                              }
                            }
                          }
                        }`,
                    },
                ],
            },
        },

    ],
}
