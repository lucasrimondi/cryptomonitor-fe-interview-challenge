import Logo from "./Logo";
import githubLogo from "../assets/github.png";
import styled from "styled-components";

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo />
      <GithubLogo
        src={githubLogo}
        alt="github-logo"
        onClick={() =>
          window.open(
            "https://github.com/lucasrimondi/cryptomonitor-fe-interview-challenge",
            "_blank"
          )
        }
      />
    </NavbarContainer>
  );
};

export default Navbar;

/*
Stlyes
*/

const NavbarContainer = styled.nav`
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  background-color: ${(props) => props.theme.colors.navbarColor};
  justify-content: space-between;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
`;

const GithubLogo = styled.img`
  width: 32px;
  margin-right: 48px;
  cursor: pointer;
  transition: transform 0.4s;
  :hover {
    transform: scale(1.1);
  }
  @media (max-width: 768px) {
    margin-right: 32px;
  }
`;
