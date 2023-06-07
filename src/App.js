import React from 'react';
import styled from 'styled-components';
import { Calendar } from './components/Calendar';
import moment from 'moment';

const AppWrapper = styled.div`
width: 100%;
height: 1200px;
background: grey;
`
function App() {

  window.moment = moment;
  moment.updateLocale('en', {week: {dow: 1}});

  return (
    <AppWrapper>
      <Calendar />
    </AppWrapper>
  );
}

export default App;
