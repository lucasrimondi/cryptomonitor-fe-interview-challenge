import logo from "../assets/logo-no-background.png";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();

  return <MainLogo src={logo} alt="logo" onClick={() => navigate("/")} />;
};

export default Logo;

/*
Stlyes
*/

const MainLogo = styled.img`
  width: 10%;
  min-width: 120px;
  max-width: 150px;
  margin-left: 48px;
  cursor: pointer;
  @media (max-width: 768px) {
    margin-left: 32px;
  }
`;
