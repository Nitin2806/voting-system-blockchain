import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);
  }, []);

  useEffect(() => {
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <Nav>
      {(toggleMenu || screenWidth > 500) && (
        <>
          <Logo
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHXPluq6GtTRPDIHRv5kJPy86uFjp5sO7hg&usqp=CAU"
            alt="Logo"
          />
          <ul>
            <li>New Poll</li>
            <li>Login</li>
          </ul>
        </>
      )}
      <Button onClick={toggleNav}>
        <GiHamburgerMenu />
      </Button>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: row;

  background: linear-gradient(45deg, rgb(156, 14, 156), midnightblue);
  ul {
    list-style-type: none;
    background: linear-gradient(45deg, rgb(156, 14, 156), midnightblue);
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  li {
    font-size: 20px;
    padding: 10px;
    text-transform: uppercase;
    color: #f1f1f1;
    cursor: pointer;
  }

  @media (max-width: 500px) {
    height: 50px;
    ul {
      flex-direction: column;
      height: auto;
      li:nth-child(1) {
        border-top: 1px solid rgba(255, 255, 255, 0.555);
        margin-top: 50px;
      }
      li {
        width: 100%;
        border-top: 1px solid rgba(255, 255, 255, 0.555);
        text-align: center;
        margin-right: 0px;
        padding: 10px 0;
        font-size: 15px;
      }
    }
  }
`;

const Logo = styled.img`
  width: 65px;
  padding: 5px;
  cursor: pointer;
  border-radius: 100%;
  object-fit: contain;
  @media (max-width: 724px) {
    width: 60px;
  }
`;

const Button = styled.button`
  display: none;
  position: absolute;
  right: 10px;
  top: 7px;
  padding: 5px;
  color: #000;
  font-size: 18px;
  border: none;
  border-radius: 10px;
  background-color: blueviolet;
  @media (max-width: 500px) {
    display: block;
  }
`;
