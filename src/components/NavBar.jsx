import React from "react";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  backdrop-filter: blur(5px);
  flex-wrap: wrap;
 
  @media (min-width: 800px) {
    position: sticky;
  top: 0;
  }
`;

const Logo = styled.h1`
  color: white;
  font-size: 1.5rem;
  margin: 0;
  @media (max-width: 800px) {
    text-align: center;
    justify-content: center;
    width: 100%;
    flex-direction: column;
    margin-bottom: 25px;
  }
`;
const NavContainer = styled.div`
  display: flex;
  padding: 0px 10px 0px 10px;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.5),
    0 0 10px rgba(255, 255, 255, 0.3), 0 0 15px rgba(255, 255, 255, 0.1);

  @media (min-width: 800px) {
    justify-content: center;
    border-radius: 100px;
    height: 3rem;
    backdrop-filter: blur(10px);
  }

  @media (max-width: 800px) {
    backdrop-filter: blur(100%);
    justify-content: center;
    width: 100%;
    flex-direction: column;
  }
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0;
  @media (max-width: 800px) {
    justify-content: center;
    width: 10%;
    flex-wrap: wrap;
  }
`;

const NavLink = styled.div`
  margin: 5vh;
  display: flex;

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
  display: flex;
  justify-content:space-around;
  
  @media (max-width: 800px) {
    margin-top: 10px;
    text-align: center;
      
    width: 100%;
    
  }
`;
const LogoLink = styled.div`
    cursor: pointer;


   

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
      <LogoContainer>
        <LogoLink>
          <FacebookIcon />
        </LogoLink>
        <LogoLink>
          <InstagramIcon />
        </LogoLink>
        <LogoLink>
          <LinkedInIcon />
        </LogoLink>
        <LogoLink>
          <GitHubIcon />
        </LogoLink>
      </LogoContainer>
    </NavbarContainer>
  );
};

export default Navbar;
