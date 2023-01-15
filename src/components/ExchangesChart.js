import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";

import { Doughnut } from "react-chartjs-2";
import { ExchangesDataContext } from "../context/ExchangesDataProvider";
import styled from "styled-components";
import { useContext } from "react";

const plugin = {
  id: "increase-legend-spacing",
  beforeInit(chart) {
    const originalFit = chart.legend.fit;
    chart.legend.fit = function fit() {
      originalFit.bind(chart.legend)();
      this.height += 10;
    };
  },
};

ChartJS.register(ArcElement, Tooltip, Legend, plugin);

const ExchangesChart = () => {
  const { rankedExchangesNamesArr, tradingVolumeDataArr } =
    useContext(ExchangesDataContext);

  const data = {
    labels: rankedExchangesNamesArr,
    datasets: [
      {
        label: "Trading Volume (24h)",
        data: tradingVolumeDataArr,
        backgroundColor: [
          "rgba(255, 206, 86, 0.2)",
          "rgba(255, 94, 86, 0.2)",
          "rgba(242, 111, 4, 0.2)",
          "rgba(254, 253, 246, 0.2)",
          "rgba(108, 108, 108, 0.2)",
        ],
        borderColor: [
          "rgba(255, 206, 86, 1)",
          "rgba(255, 94, 86, 1)",
          "rgba(242, 111, 4, 1)",
          "rgba(254, 253, 246, 1)",
          "rgba(108, 108, 108, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
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
    },
    maintainAspectRatio: false,
  };

  return (
    <ExchangesChartContainer>
      <Doughnut data={data} options={options} />
    </ExchangesChartContainer>
  );
};

export default ExchangesChart;

/*
Stlyes
*/

const ExchangesChartContainer = styled.div`
  margin-top: 32px;
  width: 50vw;
  height: 50vh;
  max-width: 600px;
  max-height: 360px;
  @media (max-width: 768px) {
    height: 40vh;
  }
`;
