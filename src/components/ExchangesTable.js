import ExchangeRow from "./ExchangeRow";
import { ExchangesDataContext } from "../context/ExchangesDataProvider";
import styled from "styled-components";
import { tableTitles } from "./utils";
import { useContext } from "react";

const ExchangesTable = () => {
  const { exchangesData } = useContext(ExchangesDataContext);

  return (
    <Table>
      <Thead>
        <Tr>
          {tableTitles.map((title, index) => (
            <Th key={index}>{title}</Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {exchangesData.map((exchange, index) => (
          <ExchangeRow exchange={exchange} key={index} order={index + 1} />
        ))}
      </Tbody>
    </Table>
  );
};

export default ExchangesTable;

/*
Stlyes
*/

const Table = styled.table`
  font-size: 16px;
  margin-bottom: 16px;
  border-collapse: collapse;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Thead = styled.thead``;

const Tr = styled.tr`
  padding: 4px;
  font-weight: 600;
  text-align: left;
  background-color: ${(props) => props.theme.colors.theadColor}; ;
`;

const Th = styled.th`
  padding: 8px 10px;
`;

const Tbody = styled.tbody`
  > tr {
    opacity: 0.8;
  }
  > tr:hover {
    opacity: 1;
  }
`;
