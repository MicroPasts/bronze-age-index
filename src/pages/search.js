import * as React from "react";
import "instantsearch.css/themes/algolia-min.css";

import {
    InstantSearch,
    // Hits,
    connectHits,
    SearchBox,
    Pagination,
    Highlight,
    ClearRefinements,
    RefinementList,
    Configure
} from "react-instantsearch-dom";

import {instantMeiliSearch} from "@meilisearch/instant-meilisearch";

import Layout from "../components/layout"
import {Container, Col, Row,Card, CardImg} from 'react-bootstrap';
import Seo from "../components/seo";

const searchClient = instantMeiliSearch(
    process.env.SEARCH_URL,
    process.env.API_KEY,
    {
        finitePagination: true,
        keepZeroFacets: false,
        filterableAttributes: ["title", "discovery", "country", "county", "projects", "museum"],
    }
);

const SearchPage = () => {
    return (
        <Layout>
            <Container fluid className={"content"}>
                <Container className={"mt-3"}>
                    <div className="ais-InstantSearch">
                        <h1 className={"mt-5"}>Search the index</h1>
                        <InstantSearch indexName="bai" searchClient={searchClient} className={"my-2"}>
                            <Row>
                                <Col md={3}>
                                        <ClearRefinements/>

                                        <h2 className={"my-2 lead fw-bolder"}>Object type</h2>
                                        <RefinementList attribute="title" operator="and" />
                                        <h2 className={"my-2 lead fw-bolder"}>Method of discovery</h2>
                                        <RefinementList attribute="discovery" />
                                        <h2 className={"my-2 lead fw-bolder"}>Country</h2>
                                        <RefinementList attribute="country" />
                                        <h2 className={"my-2 lead fw-bolder"}>County</h2>
                                        <RefinementList attribute="county" />
                                        <h2 className={"my-2 lead fw-bolder"}>Project origin</h2>
                                        <RefinementList attribute="projects" />
                                        <h2 className={"my-2 lead fw-bolder"}>Holding collection</h2>
                                    <RefinementList attribute="museum" />

                                        <Configure hitsPerPage={24} attributesToSnippet={["description:5"]} snippetEllipsisText={"..."}/>
                                </Col>

                                <Col md={9}>
                                        <SearchBox className={"my-3"}/>
                                        <CustomHits />
                                        <Pagination showLast={false} className={"mt-3"}/>
                                </Col>
                            </Row>
                        </InstantSearch>
                    </div>
                </Container>
            </Container>
        </Layout>
    );
}

const CustomHits = connectHits(({ hits }) => (
    <Row >
        {hits.map(hit => (
    <Col key={hit.id} md={3}>
        <Card className="border-0 bg-light">
            <Card.Body className="bg-white border-0 rounded-0">

            <CardImg className="card-img-top rounded-0 square" src={hit.thumbnail}  alt={"Object image"} width={150} height={150}/>
                <div className="h-100" style={{minHeight: 70}}>
                <Highlight attribute="name" hit={hit}/>
                <a href={hit.url} className="stretched-link stretched-link__blog_post"><h2 className={"lead text-black fw-bold mt-3"}>{hit.objectID}</h2></a>
                <h3 className={"lead"}>{hit.title}</h3>
                </div>
            </Card.Body>
        </Card>
    </Col>
        ))}
    </Row>
));


export default SearchPage

export const Head = () => (
    <Seo title={"Search the index"} description={"Search the Bronze Age index"}/>
)
