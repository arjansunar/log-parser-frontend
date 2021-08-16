import { Doughnut } from "react-chartjs-2";
import { useState, useEffect } from "react";
import getData from "../api/getData";

// const data = {
//   labels: ["Linux", "Microsoft", "Mac"],
//   datasets: [
//     {
//       label: "# of Votes",
//       data: [12, 19, 3],
//       backgroundColor: [
//         "rgba(255, 99, 132, 0.2)",
//         "rgba(54, 162, 235, 0.2)",
//         "rgba(255, 206, 86, 0.2)",
//       ],
//       borderColor: [
//         "rgba(255, 99, 132, 1)",
//         "rgba(54, 162, 235, 1)",
//         "rgba(255, 206, 86, 1)",
//       ],
//       borderWidth: 1,
//     },
//   ],
// };

function OsDonut() {
  const [data, setData] = useState({});
  useEffect(
    () =>
      getData("http://127.0.0.1:5000/os").then((d) =>
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
      <h2 style={{ textAlign: "center" }}>Session by operating system</h2>

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

export default OsDonut;
