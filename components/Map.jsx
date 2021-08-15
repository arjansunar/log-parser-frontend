import { useState } from "react";
import ReactMapGL from "react-map-gl";

export function Map() {
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 28,
    longitude: 100,
    zoom: 1.4,
  });
  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
      width="100vw"
      height="100vh"
      mapStyle="mapbox://styles/mapbox/dark-v9"
      mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
    />
  );
}
