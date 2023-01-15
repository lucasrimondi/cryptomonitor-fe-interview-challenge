import CoinCard from "./CoinCard";
import { CoinsDataContext } from "../context/CoinsDataProvider";
import styled from "styled-components";
import { useContext } from "react";

const CoinsCardsContainer = () => {
  const { trendingCoinsData } = useContext(CoinsDataContext);

  return (
    <CardsContainer>
      {trendingCoinsData?.map((coin, index) => (
        <CoinCard key={index} coinData={coin} />
      ))}
    </CardsContainer>
  );
};

export default CoinsCardsContainer;

/*
Stlyes
*/

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 1000px;
  align-items: center;
  margin-top: 16px;
`;
