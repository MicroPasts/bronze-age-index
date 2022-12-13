import { graphql, useStaticQuery } from "gatsby"

export const useSiteMetaLogos = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
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

    return data.site.siteMetadata.logos
}