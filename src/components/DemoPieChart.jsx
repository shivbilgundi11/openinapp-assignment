import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  Title,
  LinearScale,
  PointElement,
//   DoughnutElement,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  Title,
  LinearScale,
  PointElement,
//   DoughnutElement
);

const DemoPieChart = () => {

    


    const data = {
      labels: ["Bitcoin", "Etherium", "Tether", 'XRP'],
      datasets: [
        {
          label: "Fake Data!",
          data: [45, 30, 15, 10],
          backgroundColor: [
            "rgb(152,216,158)",
            "rgb(255, 99, 132)",
            "rgb(54, 162, 235)",
            "rgb(255, 205, 86)",
          ],
          hoverOffset: 4,
        },
      ],
    };

  return (
    <div className="pie__chart">
      <h3>Top Crypto Coins Activity</h3>

      <div className="pie__chart__box">
        <Doughnut
          options={{
            responsive: true,
            maintainAspectRatio: false,
          }}
          data={data}
        />
      </div>
    </div>
  );
}

export default DemoPieChart;