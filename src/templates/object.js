import React from "react"
import {Container} from "react-bootstrap";

import Layout from "../components/layout";
import Seo from "../components/seo";
import ObjectTitle from "../components/page-elements/object-title";
import Collection from "../components/page-elements/collection";
import Dating from "../components/page-elements/dating";
import PortableAntiquities from "../components/page-elements/portable-antiquities";
import MicropastsProject from "../components/page-elements/micropasts-project";
import Image from "../components/page-elements/image";
import Descriptive from "../components/page-elements/descriptive";
import Location from "../components/page-elements/location";
import Map from "../components/elements/map";
import Discovery from "../components/page-elements/discovery";
import Subsequent from "../components/page-elements/subsequent";
import Metrics from "../components/page-elements/metrics";
import Who from "../components/page-elements/who";
import DiscoveryContexts from "../components/page-elements/discovery-contexts";
import ErrorReport from "../components/page-elements/error-report";

const Object = props => {
    const {
        pageContext: {...object},
    } = props

    return (
        <>
            <Layout>

                <Container className="mt-3 mb-2 post-body content">
                    <ObjectTitle object={object}/>
                    <Collection object={object}/>
                    <Dating object={object}/>
                    <PortableAntiquities object={object}/>
                    <MicropastsProject object={object}/>
                    <Image object={object}/>
                    <Descriptive object={object}/>
                    <Location object={object}/>
                </Container>
                {object.fourFigureLat !== 'NA' && object.fourFigureLon !== 'NA' && (
                    <Map geo_lat={object.fourFigureLat} geo_lon={object.fourFigureLon}/>
                )}
                <Container fluid className="py-3 bg-pale">
                    <Container>
                        <Discovery object={object}/>
                        <Subsequent object={object}/>
                        <Metrics object={object}/>
                        <Who object={object}/>
                        <DiscoveryContexts object={object}/>
                    </Container>
                    <Container>
                        <ErrorReport object={object} />
                    </Container>
                </Container>
            </Layout>
        </>
    )
}

export const Head = props => {
    const {
        pageContext: {...object},
    } = props
  return (  <>
        <Seo title={'Object record ' + object.objectID} key={'title'}/>
    </>)
}

export default Object
