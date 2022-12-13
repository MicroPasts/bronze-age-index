import React from "react";
import {Container,Col,Row} from "react-bootstrap";
import {StaticImage} from "gatsby-plugin-image";

const Combined = () => (
    <Container fluid style={{}} className={'bg-pale py-4'}>
        <Row>

            <Col md={6} className="text-center">
                <StaticImage src={'../../images/NARC6A4546.jpg'} className={'rounded mx-4'} alt={'Call to action'}/>
            </Col>
            <Col md={6} className="d-flex align-items-center justify-content-center">
                <Col md={8} className="mx-auto align-middle">
                    <h1 className={"text-dark display-4 text-center fw-bolder"}>
                        Combined data
                    </h1>
                    <p>
                        Within this website, the MicroPasts team have combined the data from the National Bronze Age Implement Index
                        with publicly accessible data from  Portable Antiquities Scheme database.</p>

                    <p>
                        This allows you to explore the Bronze Age metalwork found across the UK, and to compare the data from the two sources,
                        to search, map and interrogate.
                    </p>
                    <h3 className={"fw-bolder display-6 text-center"}>Just give me these data...</h3>
                    <p>You may just want to use the raw data, that's fine. We have two CSV files with image links from the BAI and PAS. Both are CC-BY licensed and are used to power this site.</p>
                    <p className={"text-center"}>
                        <a href={"/data/bai.csv"}className="btn btn-dark rounded-0 border-white text-white my-1 mx-2">Download the BAI data (c.12MB)</a>
                        <a href={"/data/pas.csv"}className="btn btn-dark rounded-0 border-white text-white my-1 mx-2">Download the PAS data (c.6MB)</a>
                    </p>
                </Col>
            </Col>
        </Row>
    </Container>
)

export default Combined