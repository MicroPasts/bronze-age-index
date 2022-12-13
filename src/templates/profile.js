import {graphql} from "gatsby";
import * as React from "react";
import Layout from "../components/layout";
import {Container, Row, Col} from "react-bootstrap";
import Seo from "../components/structure/SEO";

export default function ProfileTemplate({data: {markdownRemark}}) {
    const {frontmatter, html} = markdownRemark;
    return (
        <Layout>
            <Container className={"mt-4"}>
                <Row className={"post-body"}>
                    <div className="">
                        <h1 className="text-black fw-bold mt-4">{frontmatter.title} {frontmatter.name}</h1>
                    </div>
                    <Row>
                        <Col md={8}>
                            <div className="post-body bg-white text-black"
                                 dangerouslySetInnerHTML={{__html: html}}/>
                        </Col>
                        <Col md={4}>
                            <img src={frontmatter.image.childImageSharp.gatsbyImageData.images.fallback.src}
                                 alt={frontmatter.name} className={"rounded-circle"}/>
                        </Col>
                    </Row>
                </Row>
                <Row>
                    <h2 className={"text-black fw-bold mt-4"}>Social media and academic handles</h2>
                    <ul className={"list-unstyled"}>
                        {frontmatter.twitter && <li>Twitter: <a href={'https://twitter.com'}>{frontmatter.twitter}</a></li>}
                        {frontmatter.orcid && <li>OrcID: <a href={'https://orcid.org'}>{frontmatter.orcid}</a></li>}
                    </ul>
                </Row>
            </Container>

        </Layout>
    );
}


export const pageQuery = graphql`
    query ($id: String!) {
        markdownRemark(id: { eq: $id }, frontmatter: {section: {eq: "team"}}) {
            html
            id
            frontmatter {
                slug
                title
                name
                twitter
                orcid
                github
                image{
                    childImageSharp {
                        gatsbyImageData(
                            placeholder: NONE
                            backgroundColor: "gray"
                            height: 300
                            formats: [AUTO, WEBP]
                            width: 300
                            quality: 90
                            transformOptions: { grayscale: true, fit: COVER, cropFocus: CENTER }
                        )
                    }
                }
            }
        }
    }
`;

export function Head({data: {markdownRemark}}) {
    const {frontmatter} = markdownRemark;
    return (
        <Seo title={frontmatter.title + ' ' + frontmatter.name}/>
    )
}
