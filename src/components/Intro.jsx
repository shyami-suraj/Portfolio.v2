import React from "react";
import styled from "styled-components";
import me from "../image/me.png";

const Section = styled.section`
  padding: 2rem 0;
  height: 80vh;
  text-align: center;
   width: 100%;
  
 
  
`;

const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: 0.5rem;
  margin-top: 0;
  /* color:white; */
`;

const Subtitle = styled.div`
  color: white;
  font-size: 1.125rem;
  margin-bottom: 2rem;
  margin:auto;
  width:30rem;
`;

const Image = styled.img`
  border-radius: 50%;
  width: 300px;
  height: 300px;
  border: 4px solid #d1d5db;
  object-fit: cover;
  object-position: center;
  margin-bottom: 2rem;

  &.dark {
    border-color: #2d3748;
  }
`;

const Hero = () => {
  return (
    <Section>

      <Title>Hi, I'm Suraj Manandhar</Title>
      
      <Image
        src={me}
        alt="Image"
      />
      <Subtitle>
        I'm a frontend developer with a passion for creating beautiful and
        intuitive user interfaces.
      </Subtitle>
    </Section>
    
  );
};

export default Hero;
