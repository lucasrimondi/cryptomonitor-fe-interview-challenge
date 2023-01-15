import { Body, Error, Loader } from "../components/styles";
import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import CoinHistoricPriceChart from "../components/CoinHistoricPriceChart";
import { CoinsDataContext } from "../context/CoinsDataProvider";
import styled from "styled-components";

const CoinHistoricPriceDetail = () => {
  const { id } = useParams();
  const { coinDetail, getCoinDetail, coinDetailLoader, coinDetailError } =
    useContext(CoinsDataContext);

  const navigate = useNavigate();

  useEffect(() => {
    getCoinDetail(id);
  }, []);

  const coinChartData = coinDetail.prices?.map((value) => ({
    x: value[0],
    y: value[1],
  }));

  return (
    <DetailPageBody>
      <BackButton onClick={() => navigate("/")}>&lt; Go Back</BackButton>
      {coinDetailLoader ? (
        <Loader>Loading...</Loader>
      ) : coinDetailError ? (
        <Error>Oops... an error ocurred. Please come back later!</Error>
      ) : (
        <CoinHistoricPriceChart coinChartData={coinChartData} />
      )}
    </DetailPageBody>
  );
};

export default CoinHistoricPriceDetail;

/*
Stlyes
*/

const DetailPageBody = styled(Body)`
  margin-top: 16px;
  margin-bottom: 16px;
  padding-right: 40px;
  padding-left: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const BackButton = styled.button`
  align-self: flex-start;
  cursor: pointer;
  background: none;
  text-decoration: underline;
  color: ${(props) => props.theme.colors.primary};
  border: none;
  font-size: 14px;
  transition: transform 0.4s;
  margin-bottom: 24px;
  :hover {
    transform: scale(1.05);
  }
`;
