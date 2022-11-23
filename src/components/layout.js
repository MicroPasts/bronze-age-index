/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import {useStaticQuery, graphql} from "gatsby"

import Header from "./structure/header"
import NavBar from "./structure/nav";
import Footer from "./structure/footer"
import Logos from "../components/structure/logos";

const Layout = ({children}) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                    menuLinks {
                        name
                        link
                        id
                    }
                    aboutLinks {
                        name
                        link
                        id
                    }
                    logos {
                        institution
                        url
                        id
                        image
                    }
                }
            }
        }
    `)

    return (
        <>
            <Header siteTitle={data.site.siteMetadata?.title || `Title`}/>
            <NavBar menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title}/>

            <main>{children}</main>
                <Logos logos={data.site.siteMetadata.logos}/>
                <Footer aboutLinks={data.site.siteMetadata.aboutLinks}/>
        </>
    )
}


export default Layout
