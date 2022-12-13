import React from "react";
import Layout from "../components/layout";

import {Container, Row,Col} from "react-bootstrap";

import Seo from "../components/structure/SEO";

const Project = props => {
    const {
        pageContext: {...project},
    } = props

    return (
        <>
            <Layout>
                <Seo title={project.frontmatter.title} description={project.frontmatter.description}/>
                <Container className="mt-3 mb-2 post-body">
                    <Row>
                        <h1 className={"ml-4 mt-4"}>{project.frontmatter.title}</h1>
                        <Col md={6}>
                        <img src={project.frontmatter.coverImage} alt={project.frontmatter.description}
                             className={"img-fluid"} width={800}/>
                        </Col>
                        <h2 className={"ml-4 mt-4"}>Contributors</h2>
                        <p>
                            These people contributed their time and skills to generate the information for this
                            citizen science project.
                        </p>
                        <div className="post-body bg-white text-black"
                             dangerouslySetInnerHTML={{__html: project.html}}/>
                        <h3 className={"ml-4 mt-4"}>Source data</h3>
                        <p>This project was created on {project.frontmatter.created} and comprised of {project.frontmatter.tasks} tasks.</p>
                        <ul className={"list-unstyled"}>
                            <li><a href={project.frontmatter.flickrURL}>Flickr Photos</a></li>
                            <li><a href={project.frontmatter.micropastsURL}>Crowdsourcing project</a></li>
                        </ul>
                    </Row>
                </Container>
            </Layout>
        </>
    )
}


export default Project