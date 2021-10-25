import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

function SearchByMap() {
  return (
    <div>
      <Map
        google={this.props.google}
        zoom={8}
        // style={mapStyles}
        initialCenter={{ lat: 9.761927, lng: 79.95244 }}
      >
        <Marker position={{ lat: 9.761927, lng: 79.95244 }} />
      </Map>
    </div>
  );
}

export default GoogleApiWrapper({
  // apiKey: "AIzaSyAXuXLvhNUOlQ3FcQCTdDJAN7iOnflyfUA",
})(SearchByMap);

