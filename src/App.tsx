/* tslint:disable */

import React, { useState } from 'react';
import styled from 'styled-components';

import ContactPage from './pages/ContactPage';
import Header from './components/Header';
import { Context } from './context/context';
import { initialUserInfo } from './mock/userInfo';
import { initialContactFormValues } from './constants/formOptions';

const App = styled.section`
  font-size: 10px;
`;

const Container = () => {
  const [userInfo, setUserInfo] = useState(initialUserInfo);
  const [formValues, setFormValues] = useState(initialContactFormValues);
  const initialContext = { userInfo, setUserInfo, formValues, setFormValues };

  return (
    // @ts-ignore
    <Context.Provider value={initialContext}>
      <App className='App'>
        <Header />
        <ContactPage />
      </App>
    </Context.Provider>
  );
};

export default Container;
