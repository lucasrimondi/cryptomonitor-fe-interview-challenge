import styled from "styled-components";

const ExchangeRow = ({ exchange, order }) => {
  return (
    <Tr>
      <OrderTd>{order}</OrderTd>
      <NameTd>
        <Img src={exchange.image} alt={exchange.name} />
        <Span>{exchange.name}</Span>
      </NameTd>
      <VolumeTd>{exchange.trade_volume_24h_btc.toFixed(2)} BTC</VolumeTd>
    </Tr>
  );
};

export default ExchangeRow;

/*
Stlyes
*/

const Tr = styled.tr`
  padding: 8px 10px;
  > td {
    padding: 8px 10px;
  }
`;

const OrderTd = styled.td`
  font-weight: 600;
`;

const NameTd = styled.td`
  align-items: center;
  display: flex;
`;

const VolumeTd = styled.td`
  text-align: right;
`;

const Img = styled.img`
  width: 1rem;
  margin-right: 4px;
`;

const Span = styled.span``;
