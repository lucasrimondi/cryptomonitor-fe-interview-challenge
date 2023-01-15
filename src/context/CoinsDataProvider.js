import { createContext, useState } from "react";

import axios from "axios";

export const CoinsDataContext = createContext();

const CoinsDataProvider = (props) => {
  const [trendingCoinsDataLoader, setTrendingCoinsDataLoader] = useState(true);
  const [trendingCoinsData, setTrendingCoinsData] = useState([]);
  const [trendingCoinsError, setTrendingCoinsError] = useState(false);

  const [coinDetailLoader, setCoinDetailLoader] = useState(true);
  const [coinDetail, setCoinDetail] = useState([]);
  const [coinDetailError, setCoinDetailError] = useState([]);

  const getTrendingCoinsData = async () => {
    await axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cethereum%2Cflixxo&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setTrendingCoinsDataLoader(false);
        setTrendingCoinsError(false);
        setTrendingCoinsData(res.data);
      })
      .catch(() => {
        setTrendingCoinsDataLoader(false);
        setTrendingCoinsError(true);
      });
  };

  const getCoinDetail = async (coin) => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=usd&days=90`
      )
      .then((res) => {
        setCoinDetailLoader(false);
        setCoinDetailError(false);
        setCoinDetail(res.data);
      })
      .catch(() => {
        setCoinDetailLoader(false);
        setCoinDetailError(true);
      });
  };

  return (
    <CoinsDataContext.Provider
      value={{
        trendingCoinsData,
        trendingCoinsDataLoader,
        getTrendingCoinsData,
        coinDetail,
        coinDetailLoader,
        getCoinDetail,
        coinDetailError,
        trendingCoinsError,
      }}
    >
      {props.children}
    </CoinsDataContext.Provider>
  );
};

export default CoinsDataProvider;
