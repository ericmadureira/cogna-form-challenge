import React from 'react';
import styled from 'styled-components';

import ContactPage from './pages/ContactPage';

const App = styled.section`
  font-size: 10px;
`;

const Container = () => (
  <App className='App'>
    <ContactPage />
  </App>
);

export default Container;
