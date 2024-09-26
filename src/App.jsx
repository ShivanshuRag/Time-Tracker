import './App.css';
import AgeTracker from './AgeTracker.jsx';
import Spline from '@splinetool/react-spline';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh; /* Make sure it covers the full viewport height */
`;

const Overlay = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 10;
  pointer-events: none; /* Ensures the overlay doesn't interfere with the Spline interactions */
`;

function App() {
  return (
    <Container>
      <Spline scene="https://prod.spline.design/0TgSb061FbACqHG4/scene.splinecode" />
      <Overlay>
        <AgeTracker birthDate="2001-04-14T00:00:00" />
      </Overlay>
    </Container>
  );
}

export default App;
