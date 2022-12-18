import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {StaticImage} from "gatsby-plugin-image";


const Journey = () => (
  <>
    <Container fluid className={'bg-pastel py-4'}>

        <Row>
          <Col md={6} className={"d-flex align-items-center justify-content-center"}>
                <Col md={8} className={"mx-auto align-middle"}>
                    <h1 className={"text-dark text-center fw-bolder display-3"}>
                        Discover the Bronze Age
                    </h1>
                    <p>
                        An innovative Citizen Science project, which began its journey to provide a definitive index of Bronze Age implements in 1913 with a call to action.Then
                        100 years later, the MicroPasts project (a partnership between University College London and the British Museum) set about digitising and using the power of the crowd to
                        unlock the paper records.
                    </p>
                </Col>
            </Col>
            <Col md={6} className={"text-center"}>
                <StaticImage src={'../../images/call-to-action.jpg'} className={'mx-4 m-2' } alt={'Call to action'}/>
            </Col>

        </Row>
        </Container>

        <Container fluid className={'bg-white py-4'}>
        <Row className={'my-2'}>
        <Col md={6} className={"d-flex align-items-center justify-content-center"}>
              <Col md={8} className={"mx-auto align-middle"}>
                <p>
                    Funded by the Arts and Humanities Research Council, the project has now successfully
                    delivered a digital index of the National Bronze Age Implement Index, which is freely available to all, including
                    the code, data and images.
                </p>
                <p>This website allows archaeologists, academics and the public to explore the
                    wide array of metalwork found and reported to museums, universities and the Portable Antiquities Scheme.
                </p>
              </Col>
          </Col>
          <Col md={6} className={"text-center p-5"}>
             <StaticImage src="../../images/logos/AHRC.jpg" alt={'The AHRC logo'}/>
          </Col>
        </Row>

    </Container>
    </>
)

export default Journey
