import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  Title,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  Title,
  LinearScale,
  PointElement,
  LineElement
);

const CoinChart = ({ coinHistory }) => {
  const prices = [];
  const dates = [];
  for (let i = 0; i < coinHistory.length; i++) {
    dates.push(new Date(coinHistory[i][0]).toLocaleTimeString());

    prices.push(coinHistory[i][1]);
  }

  const data = {
    labels: dates,
    datasets: [
      {
        label: `Prices in INR`,
        data: prices,
        borderColor: "#ee8484",
      },
    ],
  };

  return (
    <div className="chart__container">
      <h2>Bitcoin Price Chart</h2>
      <p className="last__updated">Last updated {dates[0]}</p>

      <div className="chart-box">
        <Line
          options={{
            responsive: true,
            maintainAspectRatio:false,
          }}
          data={data}
        />
      </div>
    </div>
  );
};

export default CoinChart;
