import React from "react"
import Layout from "../components/layout";
import ObjectTitle from "../components/page-elements/object-title";
import Collection from "../components/page-elements/collection";
import Dating from "../components/page-elements/dating";
import PortableAntiquities from "../components/page-elements/portable-antiquities";
import Image from "../components/page-elements/image";

import Map from "../components/elements/map";
import {Container} from "react-bootstrap";
import Seo from "../components/structure/SEO";
import MicropastsProject from "../components/page-elements/micropasts-project";
import Descriptive from "../components/page-elements/descriptive";
import Location from "../components/page-elements/location";
import Discovery from "../components/page-elements/discovery";
import Subsequent from "../components/page-elements/subsequent";
import Metrics from "../components/page-elements/metrics";
import Who from "../components/page-elements/who";

const Object = props => {
    const {
        pageContext: {...object},
    } = props
    const isSSR = typeof window === "undefined";

    return (
        <>
            <Layout>
                <Seo title={'An object record for ' + object.objectID}/>

                <Container className="mt-3 mb-2 post-body">

                    <ObjectTitle object={object}/>
                    <Collection object={object}/>
                    <Dating object={object}/>
                    <PortableAntiquities object={object}/>
                    <MicropastsProject object={object}/>
                    <Image object={object}/>
                    <Descriptive object={object}/>
                    <Location object={object}/>
                </Container>

                {!isSSR && object.fourFigureLat && (
                    <Map geo_lat={object.fourFigureLat} geo_lon={object.fourFigureLon}/>
                )}


                <Container fluid className="py-3 bg-pale">
                    <Container>

                        <Discovery object={object}/>
                        <Subsequent object={object}/>
                        <Metrics object={object}/>
                        <Who object={object}/>

                    </Container>
                </Container>

            </Layout>
        </>
    )
}


export default Object