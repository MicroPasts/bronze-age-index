import * as React from "react";
import {Container} from "react-bootstrap";

const Welcome = () => (
  <Container fluid={true} className="p-3 justify-content-center align-items-center bg-white">
      <Container className={"py-5"}>
          <div className={"text-center"}>
              <h1 className={"display-4 fw-bolder"}>
                 <strong>The National Bronze Age Implement Index</strong>
              </h1>
          </div>
      </Container>
  </Container>
)

export default Welcome
