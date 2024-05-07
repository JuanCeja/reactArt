import { useState } from 'react';
import { styled } from 'styled-components';

import Button from './Button';
import StyledInput from './Input';

const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`

const TextButton = styled.button`
  color: #f0b322;
  border: none;

  &:hover {
    color: #f0920e;
  }
`

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <ControlContainer>
        <StyledInput
          label='email'
          type="email"
          $invalid={emailNotValid}
          onChange={(event) => handleInputChange('email', event.target.value)}
        />
        <StyledInput
          label='password'
          type="password"
          $invalid={passwordNotValid}
          onChange={(event) => handleInputChange('password', event.target.value)}
        />
      </ControlContainer>
      <div className="actions">
        <TextButton type="button">
          Create a new account
        </TextButton>
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}
