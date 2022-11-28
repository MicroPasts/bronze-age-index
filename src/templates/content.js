import {graphql} from "gatsby";
import * as React from "react";
import Layout from "../components/layout";
import {Container, Row} from "react-bootstrap";
import Seo from "../components/structure/SEO";

export default function ContentTemplate({data: {markdownRemark}}) {
    const {frontmatter, html} = markdownRemark;
    return (
        <Layout>
            <Container className={"mt-4"}>
                <Row className={"post-body"}>
                    <div className="">
                        <h1 className="text-black fw-bold mt-4">{frontmatter.title}</h1>
                        <h2 className="text-black fw-bold mt-4">{frontmatter.author}</h2>

                    </div>
                            <div className="post-body bg-white text-black"
                                 dangerouslySetInnerHTML={{__html: html}}/>

                </Row>

            </Container>

        </Layout>
    );
}


export const pageQuery = graphql`
    query ($id: String!) {
        markdownRemark(id: { eq: $id }
            , frontmatter: {section: {eq: "content"}}
        ) {
            html
            id
            frontmatter {
                slug
                title
                author  
            }
        }
    }
`;

export function Head({data: {markdownRemark}}) {
    const {frontmatter} = markdownRemark;
    return (
        <Seo title={frontmatter.title}/>
    )
}
