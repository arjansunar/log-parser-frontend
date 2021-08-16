import { Doughnut } from "react-chartjs-2";
import { useState, useEffect } from "react";
import getData from "../api/getData";

function WebDonut() {
  const [data, setData] = useState({});
  useEffect(
    () =>
      getData("http://127.0.0.1:5000/browser").then((d) =>
        setData({
          ...data,
          labels: Object.keys(d),
          datasets: [
            {
              label: "# of Votes",
              data: Object.values(d),
              fill: true,
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
              ],
              borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
            },
          ],
        })
      ),
    []
  );
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Session by Browser</h2>

      <div>
        <Doughnut
          data={data}
          width={400}
          height={400}
          options={{ maintainAspectRatio: false }}
        />
      </div>
    </div>
  );
}

export default WebDonut;
