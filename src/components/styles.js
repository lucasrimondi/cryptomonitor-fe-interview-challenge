import styled from "styled-components";

export const Title = styled.h1`
  text-align: center;
  font-size: 32px;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Description = styled.h2`
  text-align: center;
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 40px;
  margin-top: 0;
  color: ${(props) => props.theme.colors.secondary};
  max-width: 600px;
  padding-left: 16px;
  padding-right: 16px;
  align-self: center;
  @media (max-width: 768px) {
    font-size: 14px;
    max-width: 480px;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`;

export const Loader = styled.p``;

export const Error = styled.p``;
