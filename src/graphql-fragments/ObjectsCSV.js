import { graphql } from "gatsby"
export const ObjectsCSV = graphql`
    fragment ObjectsCSVFragment on ObjectsCSV {
        broadperiod
        objecttype
    }
`