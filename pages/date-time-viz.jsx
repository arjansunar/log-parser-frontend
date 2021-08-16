import { Line } from "react-chartjs-2";
import { useEffect, useState } from "react";
import getData from "../api/getData";

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
  maintainAspectRatio: false,
};

function DateViz() {
  const [data, setData] = useState({});
  useEffect(
    () =>
      getData("http://127.0.0.1:5000/date").then((d) =>
        setData({
          ...data,
          labels: Object.keys(d),
          datasets: [
            {
              label: "# of Votes",
              data: Object.values(d),
              fill: true,
              backgroundColor: "rgb(64, 140, 226)",
              borderColor: "rgba(16, 25, 65, 0.2)",
            },
          ],
        })
      ),
    []
  );
  return (
    <div style={{ padding: "2rem" }}>
      <h2 style={{ textAlign: "center" }}>Users by day</h2>
      <div className="">
        <Line data={data} width={800} height={400} options={options} />
      </div>
    </div>
  );
}

export default DateViz;
