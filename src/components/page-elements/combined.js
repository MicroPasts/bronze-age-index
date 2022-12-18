import React from "react";
import {Container,Col,Row} from "react-bootstrap";
import {StaticImage} from "gatsby-plugin-image";

const Combined = () => (
    <Container fluid className={'bg-pale py-4'}>
        <Row>

            <Col md={6} className={"text-center p-2 my-2"}>
                <StaticImage src={'../../images/loop.jpg'} className={'rounded-5 mx-4'} alt={'A Sussex Loop bracelet'}/>
            </Col>
            <Col md={6} className={"d-flex align-items-center justify-content-center p-2 my-2"}>
                <Col md={8} className={"mx-auto align-middle"}>
                    <h1 className={"text-dark display-4 text-center fw-bolder"}>
                        Combined data
                    </h1>
                    <p>
                        Within this website, the MicroPasts team have combined
                        datasets from the National Bronze Age Implement Index
                        with publicly accessible data (only those objects with findspots made available)
                        from the <a href={'https://finds.org.uk'}>Portable Antiquities Scheme</a> database.
                    </p>
                    <p>
                        This allows you to explore Bronze Age metalwork found
                        across the UK, and to compare the data from the two sources,
                        to search, map and interrogate. There will be errors present
                        in these data, places might not be in the right location,
                        object types might need revising. If you see a problem,
                        you can either report it, or if you can code, submit a
                        pull request.
                    </p>
                </Col>
            </Col>
        </Row>
        <Row className={'p-4'}>
        <Col md={8} className="mx-auto">
        <h3 className={"fw-bolder display-6 text-center"}>Just give me these data...</h3>
        <p className={"text-center"}>
          You may just want to use the raw data, that's fine.<br/> We have two
          CSV files with image links from the BAI and PAS which are liberally
          CC-BY licensed and are used to power this site. You could use these to
          drive new research, or simply use it to help report errors.
        </p>
        <p className={"text-center"}>
            <a href={"/data/bai.csv"} className={"btn btn-dark rounded-0 border-white text-white my-1 mx-2"}>Download the BAI data (c.12MB)</a>
            <a href={"/data/pas.csv"} className={"btn btn-dark rounded-0 border-white text-white my-1 mx-2"}>Download the PAS data (c.6MB)</a>
        </p>
        </Col>
        </Row>
    </Container>
)

export default Combined
