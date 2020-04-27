import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 70%;
`;

const Container = () => {
  return (
    <Form>
      <span>Input</span>
      <input type="text"/>
    </Form>
  );
}

export default Container;
