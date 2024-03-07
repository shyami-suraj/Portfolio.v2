import React from "react";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  backdrop-filter: blur(5px);
  flex-wrap: wrap;
`;

const Logo = styled.h1`
  color: white;
  font-size: 1.5rem;
  margin: 0;
/* margin-left:50px; */
  
`;
const NavContainer = styled.div`
  display: flex;  
  backdrop-filter: blur(10px);
  /* height: 35px;   */
  padding: 0px 10px 0px 10px;
  justify-content: space-around;
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.5),
    0 0 10px rgba(255, 255, 255, 0.3), 0 0 15px rgba(255, 255, 255, 0.1);
  border-radius: 100px;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
  }
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: space-around;
  /* margin: 5vh; */
  flex-wrap: wrap;

  padding: 0;
  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
  }
`;

const NavLink = styled.div`
  /* margin-right: 10rem; */
  margin: 5vh;
  display: flex;

  &:first-child {
    margin-left: 10px;
  }

  &:last-child {
    margin-right: 10px;
  }

  a {
    color: white;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #ccc;
    }
  }
`;
const LogoContainer = styled.div`
  color: white;
  margin: 0;
  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>Protfolio</Logo>
      <NavContainer>
        <NavLinks>
          <NavLink>
            <a href="#">Home</a>
          </NavLink>
          <NavLink>
            <a href="#">About</a>
          </NavLink>
          <NavLink>
            <a href="#">Projects</a>
          </NavLink>
        </NavLinks>
      </NavContainer>
      <LogoContainer>discord</LogoContainer>
    </NavbarContainer>
  );
};

export default Navbar;
