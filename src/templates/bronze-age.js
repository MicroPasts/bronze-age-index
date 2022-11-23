import * as React from "react"
import Layout from "../components/layout"
import PostCard from "../components/structure/post-card";
import {graphql} from "gatsby"
import {Container, Row} from 'react-bootstrap';
import Seo from "../components/structure/SEO"

import Pagination from '../components/structure/pagination';

const BronzePageTemplate = (props) => {
    console.log(props.data.allSplitCsv)
    const Posts = props.data.allSplitCsv.edges.map(edge => <PostCard key={edge.node.id} post={edge.node}/>)
    return (
        <Layout>
            <Container>
                <Row>
                    <h1 className={"ml-4 mt-4"}>The Bronze Age Implement Index</h1>

                </Row>
                <Row>
                    {Posts}
                </Row>
            </Container>
            <Container fluid className={"mx-auto text-center bg-pastel"}>
                <Pagination pageContext={props.pageContext} />
            </Container>
        </Layout>
    );
}
export default BronzePageTemplate

export const pageQuery = graphql`
    query($skip: Int!, $limit: Int!) {
        allSplitCsv(
            limit: $limit
            skip: $skip
        ) {
            edges {
                node {
                    id
                    objectID
                    objectType
                    thumbnail {
                    publicURL
                    childImageSharp {
                        gatsbyImageData(
                            placeholder: TRACED_SVG
                            height: 300
                            formats: [AUTO, WEBP]
                            width: 300
                            quality: 80
                            transformOptions: { grayscale: false, fit: COVER, cropFocus: CENTER }
                        )
                    }
                }
                }
            }
        }
    }
`
export const Head = () => (
    <Seo title={"The Bronze Age Index paginated"} description={"The Bronze Age Index paginated"}/>
)