import { Chart } from "react-google-charts";
import { useState, useEffect } from "react";
import getData from "../api/getData";

function GoogleMap() {
  const [data, setData] = useState([["Country", "No of requests"]]);
  useEffect(
    () =>
      getData("http://127.0.0.1:5000/geolocation").then((d) => {
        const listOfCountries = d.data.map((el) =>
          Array(el.noOfReq).fill(el.query.country)
        );
        const flattenedListCountries = listOfCountries.reduce(
          (a, c) => a.concat(c),
          []
        );
        console.log("flattened array: ", flattenedListCountries);
        const geoData = {};
        flattenedListCountries.forEach((element) => {
          geoData[element] = (geoData[element] || 0) + 1;
        });

        const chartData = Object.keys(geoData).map((el) => [el, geoData[el]]);

        setData([...data, ...chartData]);
        console.log("dataat", data);
      }),
    []
  );
  return (
    <Chart
      width={"100vw"}
      height={"90vh"}
      chartType="GeoChart"
      data={data}
      // Note: you will need to get a mapsApiKey for your project.
      // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
      mapsApiKey={process.env.NEXT_PUBLIC_MAPS_KEY}
      rootProps={{ "data-testid": "1" }}
    />
  );
}

export default GoogleMap;
