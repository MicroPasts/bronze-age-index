import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HeaderImage from "../components/elements/headerImage";
import Welcome from "../components/page-elements/welcome";
import Journey from "../components/page-elements/journey";
import Combined from "../components/page-elements/combined";
import Mold from "../components/page-elements/mold";
import Peripleo from "../components/page-elements/peripleo";

const IndexPage = () => (
    <Layout>
        <HeaderImage/>
        <Welcome />
        <Journey/>
        <Combined/>
        <Mold/>
        <Peripleo/>
    </Layout>
)

export const Head = () => <Seo title="Home"/>

export default IndexPage
