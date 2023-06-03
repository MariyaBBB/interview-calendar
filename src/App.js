import React from 'react';
import styled from 'styled-components';
import { Calendar } from './components/Calendar';

const AppWrapper = styled.div`
width: 100%;
min-height: 100vh;
background: grey;
`
function App() {
  return (
    <AppWrapper>
      <Calendar />
    </AppWrapper>
  );
}

export default App;
