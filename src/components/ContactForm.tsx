import React, { useMemo } from 'react';
import styled from 'styled-components';

import formOptions from '../constants/formOptions';

const CheckboxField = styled.div`
  display: flex;
  justify-content: start;
  margin-bottom: 15px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 70%;
`;

const FieldLabel = styled.label`
  display: inline-block;
  font-size: 1.4em;
  font-weight: bold;
  margin-bottom: 5px;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const FormLine = styled.hr`
  border: 0;
  border-top: 0.75px solid #eee;
  margin: 10px 0 25px 0;
  width: 100%;
`;

const RadioGroup = styled.div`
  display: flex;
  justify-content: start;
`;

const RadioLabel = styled.label`
  font-size: 1.4em;
  font-weight: bold;
  margin-right: 20px;
`;

const SelectGroup = styled.select`
  border: solid 1px #CCCCCC;
  border-radius: 4px;
  padding: 6px 12px;
  width: 100%;
`;

const SubmitButton = styled.button`
  background-color: #2E3138;
  border: none;
  border-radius: 5px;
  box-shadow: 1px 1px 1px rgb(0, 0, 0, 0.2);
  color: #fff;
  cursor: pointer;
  font-size: 1.5em;
  margin-bottom: 20px;
  padding: 10px 20px;
  width: 80px;
`;

const TextArea = styled.textarea`
  border: solid 1px #CCCCCC;
  border-radius: 4px;
  height: 200px;
  padding: 6px 12px;
  width: 100%;

  ::placeholder {
    font-family: Arial;
  }
`;

const TextInput = styled.input`
  border: solid 1px #CCCCCC;
  border-radius: 4px;
  padding: 6px 12px;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 2.6em;
  font-weight: normal;
  margin: 10px 0;
`;

const Container = () => {
  const { contactSubjects } = formOptions;
  const subjectOptions = useMemo(() => (
    contactSubjects
      .map(({ id, label }) => (
        <option key={id} value={id}>{label}</option>
      ))
  ), [contactSubjects]);

  return (
    <Form>
      <Title>Contact Form</Title>
      <FormField>
        <FieldLabel>Your Name:</FieldLabel>
        <TextInput type='text' required />
      </FormField>
      <FormField>
        <FieldLabel>Your Best Email:</FieldLabel>
        <TextInput type='email' required />
      </FormField>
      <FormField>
        <FieldLabel>Select your membership option:</FieldLabel>
        <RadioGroup>
          <input type='radio' name='membership' value='A' />
          <RadioLabel htmlFor='membership'>Option A</RadioLabel>
          <input type='radio' name='membership' value='B' />
          <RadioLabel htmlFor='membership'>Option B</RadioLabel>
          <input type='radio' name='membership' value='C' />
          <RadioLabel htmlFor='membership'>Option C</RadioLabel>
        </RadioGroup>
      </FormField>

      <FormLine />

      <FormField>
        <FieldLabel>What can we help you with:</FieldLabel>
        <SelectGroup>
          {subjectOptions}
        </SelectGroup>
      </FormField>
      <FormField>
        <FieldLabel>Message:</FieldLabel>
        <TextArea placeholder='Please type your question here' />
      </FormField>
      <CheckboxField>
        <input type='checkbox' id='termsAgreement' name='termsAgreement' required/>
        <FieldLabel>I agree to terms and conditions</FieldLabel>
      </CheckboxField>
      <SubmitButton type='submit'>Send</SubmitButton>
    </Form>
  );
};

export default Container;
