import React from "react"
import {Container} from "react-bootstrap";
const HeaderImage = () => (
       <Container fluid style={{
            backgroundImage: `url(/axe.jpg)`,
            height: "60vh",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
        }}></Container>

)

export default HeaderImage
