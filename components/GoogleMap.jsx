import { Chart } from "react-google-charts";

function GoogleMap() {
  return (
    <Chart
      width={"100vw"}
      height={"90vh"}
      chartType="GeoChart"
      data={[
        ["Country", "Popularity"],
        ["Germany", 200],
        ["United States", 300],
        ["Brazil", 400],
        ["Canada", 500],
        ["France", 600],
        ["RU", 700],
      ]}
      // Note: you will need to get a mapsApiKey for your project.
      // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
      mapsApiKey={process.env.NEXT_PUBLIC_MAPS_KEY}
      rootProps={{ "data-testid": "1" }}
    />
  );
}

export default GoogleMap;
