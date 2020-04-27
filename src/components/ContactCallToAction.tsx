import React from 'react';
import styled from 'styled-components';

const ContactCallToAction = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 30%;
`;

const Title = styled.p`
  display: flex;
  font-size: 30px;
  justify-content: start;
`;

const Container = () => {
  return (
    <ContactCallToAction>
      <Title>Contact us</Title>
    </ContactCallToAction>
  );
}

export default Container;
