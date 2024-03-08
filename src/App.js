
import './App.css';
// import Test from './components/Test';
import NavBar from './components/NavBar';
import styled from 'styled-components';

const Background = styled.div`

`;


function App() {
  return (
    <div className='background'>
     <Background >
     <NavBar/>
     {/* <Test/> */}

     </Background>
     
    </div>
  );
}

export default App;
