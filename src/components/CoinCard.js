import { NavLink } from "react-router-dom";
import moment from "moment";
import styled from "styled-components";

const CoinCard = ({ coinData }) => {
  return (
    <LinkCustom to={`/coin/${coinData.id}`}>
      <Card>
        <CoinTitle>{coinData.name}</CoinTitle>
        <CoinLogo src={coinData.image} alt={coinData.symbol} />
        <CurrentPrice>
          <SubTitle>Current price:</SubTitle>
          <b>{coinData.current_price}</b> USD
        </CurrentPrice>
        <LastUpdate>
          <u>Last update:</u>{" "}
          {moment(coinData.last_updated)
            .utc()
            .format("MMMM Do YYYY, h:mm:ss a")}{" "}
          (GMT), UTC +0.
        </LastUpdate>
      </Card>
    </LinkCustom>
  );
};

export default CoinCard;

/*
Stlyes
*/

const LinkCustom = styled(NavLink)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.primary}; ;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid ${(props) => props.theme.colors.cardBorderColor};
  border-radius: 12px;
  height: 300px;
  width: 200px;
  cursor: pointer;
  margin: 0 16px 30px 16px;
  padding: 16px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: transform 0.4s;
  text-decoration: none;
  :hover {
    transform: scale(1.05);
  }
  @media (max-width: 768px) {
    height: 240px;
    width: 140px;
  }
`;

const CoinTitle = styled.h3`
  text-align: center;
  margin-top: 0;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const CoinLogo = styled.img`
  cursor: pointer;
  width: 120px;
  @media (max-width: 768px) {
    width: 90px;
  }
`;

const CurrentPrice = styled.div`
  margin-top: 24px;
  margin-bottom: 16px;
  text-align: center;
  font-size: 18px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const LastUpdate = styled.p`
  text-align: center;
  font-size: 12px;
  @media (max-width: 768px) {
    font-size: 10px;
    margin-top: 0;
  }
`;

const SubTitle = styled.p`
  margin-top: 0;
  margin-bottom: 4px;
  text-align: center;
  font-size: 12px;
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;
