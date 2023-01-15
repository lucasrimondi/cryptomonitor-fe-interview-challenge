import { Description, Error, Loader, Title } from "./styles";
import { useContext, useEffect } from "react";

import CoinsCardsContainer from "./CoinsCardsContainer";
import { CoinsDataContext } from "../context/CoinsDataProvider";
import styled from "styled-components";

const CoinsSection = () => {
  const { trendingCoinsDataLoader, trendingCoinsError, getTrendingCoinsData } =
    useContext(CoinsDataContext);

  useEffect(() => {
    getTrendingCoinsData();
  }, []);

  return (
    <CoinsContainer>
      <Title>Trending Coins</Title>
      <Description>Click on the card to see coin's historical data</Description>
      {trendingCoinsDataLoader ? (
        <Loader>Loading...</Loader>
      ) : trendingCoinsError ? (
        <Error>Oops... an error ocurred. Please come back later!</Error>
      ) : (
        <CoinsCardsContainer />
      )}
    </CoinsContainer>
  );
};

export default CoinsSection;

/*
Stlyes
*/

const CoinsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 16px;
`;
