import * as React from "react"
import Layout from "../components/layout"
import TeamCard from "../components/structure/team-card";
import {graphql} from "gatsby"
import {Container, Row} from 'react-bootstrap';
import Seo from "../components/seo";

const TeamPage = (props) => {
    const Posts = props.data.allMarkdownRemark.edges.map(edge => <TeamCard key={edge.node.id} post={edge.node}/>)
    return (
        <Layout>
            <Container className={"content"}>
                <Row>
                    <h1 className="ml-4 mt-4">The Team behind this project</h1>
                    <Row>
                        {Posts}
                    </Row>
                </Row>
            </Container>
        </Layout>
    );
}
export default TeamPage

export const pageQuery = graphql`
    query{
        allMarkdownRemark(
            filter: {frontmatter: {section: {eq: "team"}}}
            sort: {frontmatter: {name: ASC}}

        ) {
            edges {
                node {
                    id
                    frontmatter {
                        name
                        slug
                        title
                        institution
                        image {
                            childImageSharp {
                                id
                                gatsbyImageData(
                                    placeholder: NONE
                                    backgroundColor: "gray"
                                    height: 300
                                    formats: [AUTO,WEBP]
                                    width: 300
                                    quality: 80
                                    transformOptions: {grayscale: false, fit: COVER, cropFocus: CENTER}
                                )
                            }
                        }
                    }
                }
            }
        }
    }
`

export const Head = () => (
    <Seo title={"The MicroPasts team"} description={"The team behind the MicroPasts project and the Bronze Age index"} />
)
