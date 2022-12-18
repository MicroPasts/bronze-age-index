import * as React from "react"
import {useStaticQuery, graphql} from "gatsby"

import NavBar from "./structure/nav";
import Logos from "../components/structure/logos";
import Footer from "./structure/footer"
import CookieConsent from '../components/services/cookieconsent';

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
                        link
                        id
                        image
                    }
                }
            }
        }
    `)

    return (
      <>
        <NavBar menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title}/>
        <main>{children}</main>
        <Logos logos={data.site.siteMetadata.logos}/>
        <Footer aboutLinks={data.site.siteMetadata.aboutLinks}/>
        <CookieConsent/>
      </>
    )
}


export default Layout
