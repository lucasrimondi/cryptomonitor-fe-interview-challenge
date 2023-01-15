import { Description, Error, Loader, Title } from "./styles";
import { useContext, useEffect } from "react";

import ExchangesChart from "./ExchangesChart";
import { ExchangesDataContext } from "../context/ExchangesDataProvider";
import ExchangesTable from "./ExchangesTable";
import styled from "styled-components";

const ExchangesSection = () => {
  const { getExchangesData, loadingExchangesData, errorExchangesData } =
    useContext(ExchangesDataContext);

  useEffect(() => {
    getExchangesData();
  }, []);

  return (
    <ExchangesContainer>
      <Title>Exchanges activity</Title>
      <Description>
        Monitor, rank and compare the activity of the most trusted
        Cryptocurrencies Exchanges by trading volume
      </Description>
      {loadingExchangesData ? (
        <Loader>Loading...</Loader>
      ) : errorExchangesData ? (
        <Error>Oops... an error ocurred. Please come back later!</Error>
      ) : (
        <>
          <ExchangesTable />
          <ExchangesChart />
        </>
      )}
    </ExchangesContainer>
  );
};

export default ExchangesSection;

/*
Stlyes
*/

const ExchangesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 48px;
  margin-top: 40px;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;
