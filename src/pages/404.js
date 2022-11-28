import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import {Container, Row} from "react-bootstrap"
import {StaticImage} from "gatsby-plugin-image";

const NotFoundPage = () => (
    <Layout>
        <Container className={"mt-4"}>
            <Row className={"post-body"}>
                <h1 className={"mt-3"}>404: Page or route not found</h1>
                <StaticImage src={"../images/404.jpg"} alt={"404 - Please do not feed the cats"} className={"rounded-5 img-fluid px-5 py-3"}/>
                <p className={"my-3"}>You just hit a route that does not exist... the sadness strikes arrows into my soul.</p>
            </Row>
        </Container>
    </Layout>
)

export const Head = () => <Seo title="404: Not Found"/>

export default NotFoundPage
