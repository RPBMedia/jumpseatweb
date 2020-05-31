import React from 'react';
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
} from 'react-google-maps';

function MapObject() {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{
        lat: 45.42, 
        lng: -75.69,
      }}
    />
  );
}

const WrappedMap = withScriptjs(withGoogleMap(MapObject));

export default function Map() {
  return (
    <div>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: "100%" }} /> }
        containerElement={<div style={{ height: "100%" }} /> }
        mapElement={<div style={{ height: "100%" }} /> }
      />
    </div>
  )
} ;