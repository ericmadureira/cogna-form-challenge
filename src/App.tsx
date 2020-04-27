import React from 'react';
import styled from 'styled-components';

import ContactPage from './pages/ContactPage';
import Header from './components/Header';

const App = styled.section`
  font-size: 10px;
`;

const Container = () => (
  <App className='App'>
    <Header />
    <ContactPage />
  </App>
);

export default Container;
