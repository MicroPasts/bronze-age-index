import React from "react"
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet"
import PropTypes from "prop-types";
import 'leaflet/dist/leaflet.css';
import {Row} from "react-bootstrap";
import L from 'leaflet';
import { useHasMounted } from "../../utils/hasMounted";



const Map = ({geo_lon, geo_lat}) => {
  const hasMounted = useHasMounted();

 if (hasMounted) {
  const mapIcon = new L.Icon({
      iconUrl: require('leaflet/dist/images/marker-icon.png').default,
  });
    return (
            <Row className={"mapObject"}>
                <MapContainer
                    center={[geo_lat, geo_lon]}
                    zoom={12}
                    style={{height: "600px"}}
                    scrollWheelZoom={false}
                    dragging={false}
                    tap={false} key="map"
                >
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[geo_lat, geo_lon]} icon={mapIcon}>
                        <Popup>
                            Location associated
                        </Popup>
                    </Marker>
                </MapContainer>

                </Row>

    )
}
}

Map.propTypes = {
    geo_lat: PropTypes.string,
    geo_lon: PropTypes.string,
}

Map.defaultProps = {
    geo_lat: 52.370216,
    geo_lon: 11.081284,
}

export default Map
