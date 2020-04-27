import React from 'react';
import styled from 'styled-components';

import ContactForm from '../components/ContactForm';
import ContactCallToAction from '../components/ContactCallToAction';

const ContactPage = styled.section`
  display: flex;
  margin: 0 7.5%;
`;

const Container = () => {
  return (
    <ContactPage>
      <ContactCallToAction />
      <ContactForm />
    </ContactPage>
  );
}

export default Container;
