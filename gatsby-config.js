/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
const {typeNameFromDir} = require("gatsby-transformer-csv")

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
                name: 'The Index',
                link: '/bronze-age-index/records/',
                id: 2
            }
        ],
        aboutLinks: [
            {
                name: 'Meet the Team',
                link: '/team',
                id: 1
            },{
                name: 'About the Project',
                link: '/background',
                id: 2
            },
            {
                name: 'History of the index',
                link: '/history-of-the-index',
                id:3
            },{
                name: 'How was this created?',
                link: '/how-was-this-created',
                id: 4
            }

        ],
        logos: [
            {
                institution: 'AHRC',
                url: 'https://ahrc.ukri.org/',
                id: 4,
                image: '/logos/AHRC.jpg'
            },
            {
                institution: 'British Museum',
                url: 'https://britishmuseum.org/',
                id: 1,
                image: '/logos/bm.png'
            },
            {
                institution: 'MicroPasts',
                url: 'https://micropasts.org/',
                id: 2,
                image: '/logos/mp.jpg'
            },
            {
                institution: 'Institute of Archaeology',
                url: 'https://archaeology.ucl.ac.uk/',
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
        `gatsby-plugin-sharp`,
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

    ],
}
