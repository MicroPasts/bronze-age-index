import * as React from "react"
import {Container} from "react-bootstrap";
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import HeaderImage from "../components/elements/headerImage";
import Journey from "../components/page-elements/journey";
import Combined from "../components/page-elements/combined";
import Mold from "../components/page-elements/mold";
import Peripleo from "../components/page-elements/peripleo";
const IndexPage = () => (
    <Layout>
        <HeaderImage/>
        <Container fluid={true} className="p-3 justify-content-center align-items-center bg-white">
            <Container className={"py-5"}>
                <div className={styles.textCenter}>
                    <h1 className={"text-gradient"}>
                       <b>The National Bronze Age Implement Index</b>
                    </h1>

                </div>

            </Container>

        </Container>
        <Journey/>
        <Combined/>
        <Mold/>
        <Peripleo/>
    </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home"/>

export default IndexPage
