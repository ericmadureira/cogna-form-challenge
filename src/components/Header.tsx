import React from 'react';
import styled from 'styled-components';

import logo from '../assets/cogna-logo.png';

const Header = styled.header`
  align-items: center;
  background-color: #F1F1F1;
  box-shadow: 1px 1px 1px rgb(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  padding: 10px 7.5%;
`;

const Logo = styled.div`
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  height: 50px;
  width: 100px;
`;

const LoginSection = styled.div`
  display: flex;
`;

const LoginButton = styled.button`
  background-color: #2E3138;
  border: none;
  border-radius: 5px;
  box-shadow: 1px 1px 1px rgb(0, 0, 0, 0.2);
  color: #fff;
  cursor: pointer;
  font-size: 1.5em;
  padding: 10px 20px;

  :focus {
    outline: none;
  }
`;

const UserInfo = styled.span`
  display: none;
  font-size: 1.5em;
`;

const Container = () => (
  <Header>
    <Logo />
    <LoginSection>
      <LoginButton>Log in</LoginButton>
      <UserInfo>Hi, User</UserInfo>
    </LoginSection>
  </Header>
);

export default Container;
