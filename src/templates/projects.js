import * as React from "react"
import Layout from "../components/layout"
import ProjectCard from "../components/structure/project-card";
import {graphql} from "gatsby"
import {Container, Row} from 'react-bootstrap';
import Seo from "../components/seo"

import Pagination from '../components/structure/pagination';

const ProjectsPageTemplate = (props) => {
    const Posts = props.data.allMarkdownRemark.edges.map(edge => <ProjectCard key={edge.node.id} post={edge.node}/>)
    return (
        <Layout>
            <Container className={"content"}>
                <Row>
                    <h1 className={"ml-4 mt-4"}>The Citizen Science Projects behind the index</h1>
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
export default ProjectsPageTemplate

export const pageQuery = graphql`
    query($skip: Int!, $limit: Int!) {
        allMarkdownRemark(
            filter: {frontmatter: {section: {eq: "projects"}}}
            sort: {frontmatter: {title: ASC}}
            limit: $limit
            skip: $skip
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        description
                        flickrURL
                        micropastsURL
                        slug
                        coverImage
                        created
                        tasks
                    }
                    cover{
                            childImageSharp {
                                id
                               gatsbyImageData(
                                    placeholder: BLURRED
                                    height: 300
                                    formats: [AUTO, WEBP]
                                    width: 300
                                    quality: 80
                                    transformOptions: {grayscale: false, fit: COVER, cropFocus:
                                    CENTER}
                                )
                            }
                        }
                }
            }
        }
    }
`
export const Head = () => (
    <Seo title={"The Bronze Age Index Cit Sci projects"} description={"The Bronze Age Index citizen science projects paginated"}/>
)
