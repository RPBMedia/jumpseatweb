import React from 'react';
import compose from 'recompose/compose';
import withState from 'recompose/withState';

const Field = ({ children }) =>
  <>
    {children}
    <br />
  </>;

const Input = ({ value, onChange, ...props }) =>
  <input
    {...props}
    value={value}
    onChange={event => onChange(event.target.value)}
  />;

const SubmitButton = props =>
  <button {...props}>submit</button>;

const UserForm = ({
  setEmail,
  setPassword,
  email,
  password,
  onSubmit,
}) => (
  <>
    <Field>
      email: <Input value={email} onChange={setEmail} />
    </Field>
    <Field>
      password: <Input value={password} onChange={setPassword} type="password" />
    </Field>
    <SubmitButton onClick={() => onSubmit(email, password)} />
  </>
);

const withUserFormState = compose(
  withState('email', 'setEmail'),
  withState('password', 'setPassword'),
);

export default withUserFormState(UserForm);
