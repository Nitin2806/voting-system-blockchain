import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { login, logout } from "../utils";

function Header() {
  return (
    <>
      <Nav>
        <Link to={"/"}>
          <Logo
            src="https://www.india.gov.in/sites/upload_files/npi/files/logo_1.png"
            alt="Logo"
          />
        </Link>
        <NavMenu>
          <Link to={"/newpoll"}>
            <Title active={location.pathname === "/"}>New Poll</Title>
          </Link>
        </NavMenu>
        <StatusContainer onClick={window.accountId === "" ? login : logout}>
          {window.accountId === "" ? "Login" : window.accountId}
        </StatusContainer>
      </Nav>
    </>
  );
}

export default Header;

const Nav = styled.nav`
  top: 0;
  left: 0;
  width: 100%;
  height: 90px;
  display: flex;
  z-index: 1001;
  padding: 0 40px;
  position: fixed;
  user-select: none;
  align-items: center;
  transition: all 500ms ease;
  justify-content: space-between;
  background-color: rgba(3, 29, 48, 1);

  @media (max-width: 724px), (max-width: 870px) {
    position: relative;
    height: 55px;
    padding: 0 20px;
    background-color: rgba(3, 29, 48, 1);
  }
`;

const Logo = styled.img`
  width: 250px;
  padding: 5px;
  cursor: pointer;
  object-fit: contain;
  /* border-radius: 100%; */
  @media (max-width: 724px) {
    width: 60px;
  }
`;

const NavMenu = styled.div`
  flex: 1;
  display: flex;
  padding: 0 30px;
  align-items: center;
  transition: all 0.5s;
  transition-timing-function: ease-in;
  a {
    display: flex;
    padding: 0 12px;
    cursor: pointer;
    text-decoration: none;
    align-items: center;
    color: white;
    img {
      height: 20px;
    }
    svg {
      height: 20px;
    }
    &:hover {
      span:after {
        transform: scaleX(1.1) scaleY(1);
        opacity: 1;
      }
    }
  }
  @media (max-width: 724px) {
    display: none;
  }
`;

const Title = styled.span`
  font-size: 18px;
  letter-spacing: 1.42px;
  position: relative;
  padding: 10px;
  vertical-align: middle;
  :hover {
    border: 1px solid silver;
    border-radius: 20px;
  }
`;

const StatusContainer = styled.div`
  color: white;
  padding: 10px;
`;
