import { createContext, useState } from "react";

import axios from "axios";

export const ExchangesDataContext = createContext();

const ExchangesDataProvider = (props) => {
  const [exchangesData, setExchangesData] = useState([]);
  const [loadingExchangesData, setLoadingExchangesData] = useState(true);
  const [errorExchangesData, setErrorExchangesData] = useState(false);

  const getExchangesData = async () => {
    await axios
      .get("https://api.coingecko.com/api/v3/exchanges?per_page=5&page=1")
      .then((res) => {
        setLoadingExchangesData(false);
        setErrorExchangesData(false);
        rankExchangesByVolume(res.data);
      })
      .catch(() => {
        setLoadingExchangesData(false);
        setErrorExchangesData(true);
      });
  };

  const rankExchangesByVolume = (data) => {
    const rankedExchanges = data.sort(
      (x, y) => y.trade_volume_24h_btc - x.trade_volume_24h_btc
    );
    setExchangesData(rankedExchanges);
  };

  const rankedExchangesNamesArr = exchangesData.map(
    (exchange) => exchange.name
  );

  const tradingVolumeDataArr = exchangesData.map(
    (exchange) => exchange.trade_volume_24h_btc
  );

  return (
    <ExchangesDataContext.Provider
      value={{
        exchangesData,
        rankedExchangesNamesArr,
        tradingVolumeDataArr,
        getExchangesData,
        loadingExchangesData,
        errorExchangesData,
      }}
    >
      {props.children}
    </ExchangesDataContext.Provider>
  );
};

export default ExchangesDataProvider;
