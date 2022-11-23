import { graphql, useStaticQuery } from "gatsby"

export const useSiteMetadata = () => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          twitterHandle
          image
          siteUrl
        }
      }
    }
  `)

    return data.site.siteMetadata
}