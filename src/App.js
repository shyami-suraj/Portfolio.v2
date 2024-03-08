
import './App.css';
import Intro from './components/Intro';

import NavBar from './components/NavBar';
import styled from 'styled-components';
import background from "./image/background.jpg";

const Background = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  width:100%;
  
`;


function App() {
  return (
    <div className='background'>
     <Background >
     <NavBar/>
     <Intro/>
     </Background>
     

     
    </div>
  );
}

export default App;
