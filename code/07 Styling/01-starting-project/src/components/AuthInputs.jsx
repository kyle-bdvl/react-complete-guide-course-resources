import { useState } from 'react';
import {styled} from 'styled-components';
import StyledButton from './button.jsx';
import Input from './Input.jsx';

// const ControlContainer = styled.div `
//   display: flex;
//   flex-direction: column;
//   gap: 0.5rem;
//   margin-bottom: 1.5rem;
// `
//instead of assigning the "invalid class " we assign it for styled.input (basically the input component)
// const Input = styled.input `
  
//   width: 100%;
//   padding: 0.75rem 1rem;
//   line-height: 1.5;
//   background-color: ${({invalid}) => invalid ? '#fed2d2' : '#d1d5db'};
//   color: ${({invalid}) => invalid? '#f87171' : '#6b7280' } ;
//   border: 1px solid transparent;
//   border-radius: 0.25rem;
//   box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);

// `
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
    <div id="auth-inputs" className="w-full max-w-sm p-8 mx-auto rounded shadow-md bg-gradient-to-b from-stone-700 to-stone-800"> 
      <div className="flex flex-col gap-2 mb-6">
        <Input 
          invalid={emailNotValid} 
          label={'Email'}
          type="email"
          onChange={(event) => handleInputChange('email', event.target.value)}
        />
        <Input
          invalid={passwordNotValid} 
          label={'Password'}
          type="password"
          onChange={(event) => handleInputChange('password', event.target.value)}
        />
      </div>
      <div className="flex justify-end gap-4">
        <StyledButton 
        type="button" 
        className="text-amber-400 hover:text-amber-500"
        >
          Create a new account
        </StyledButton>
        <StyledButton onClick={handleLogin}>Sign In</StyledButton>
      </div>
    </div>
  );
}
                                                     