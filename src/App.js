import React from 'react';
import './App.css';
import Intro from './components/Intro';
import NavBar from './components/NavBar';
import styled from 'styled-components';
import background from "./image/background.jpg";
import Dummydata from './components/Dummydata';

const Background = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  width:100%;
  
  
`;

function App() {


  return (
    <div>
      <Background>
        <NavBar  />
        <Intro />
      </Background>
      <Dummydata/>
    </div>
  );
}

export default App;