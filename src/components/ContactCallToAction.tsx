import React from 'react';
import styled from 'styled-components';

import logo from '../assets/cogna-logo.png';

const ContactCallToAction = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-right: 30px;
  width: 35%;
`;

const Hint = styled.span`
  font-size: 1.5em;
  margin: 10px 0;
`;

const Logo = styled.img`
  height: 200px;
  width: 100%;
`;

const Title = styled.span`
  font-size: 3em;
  margin-top: 10px;
`;

const Container = () => (
  <ContactCallToAction>
    <Title>Contact us</Title>
    <Hint>Please fill in form on the right to get fast reply</Hint>
    <Logo
      src={logo}
      alt='Cogna logo'
    />
  </ContactCallToAction>
);

export default Container;
