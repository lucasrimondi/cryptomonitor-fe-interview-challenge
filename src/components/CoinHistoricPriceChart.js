import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";

import { Line } from "react-chartjs-2";
import moment from "moment";
import { useParams } from "react-router-dom";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const CoinHistoricPriceChart = ({ coinChartData }) => {
  const { id } = useParams();

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "white",
          font: {
            size: 14,
          },
        },
      },
      title: {
        display: true,
        text: "Historical daily price in USD - Last 3 months",
        color: "white",
        font: {
          size: 18,
        },
      },
    },
  };

  const data = {
    labels: coinChartData?.map((value) => moment(value.x).format("DD/MM/YY")),
    datasets: [
      {
        fill: true,
        label: id[0].toUpperCase() + id.substring(1),
        data: coinChartData?.map((value) => value.y),
        borderColor: "rgba(255, 206, 86, 1)",
        backgroundColor: "rgba(255, 206, 86, 0.2)",
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export default CoinHistoricPriceChart;
