import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';

const InputField = ({
  input,
  label,
  meta: { touched, error },
  autoFocus,
  autoComplete,
  type,
  name,
  id,
}) => (
  <TextField
    onBlur={() => input.onBlur(input.value)}
    onChange={(e) => input.onChange(e.target.value)}
    autoComplete={autoComplete}
    name={name}
    fullWidth
    id={id}
    label={label}
    autoFocus={autoFocus}
    helperText={`${touched && error ? error : ' '}`}
    error={touched && error}
    type={type}
    {...input}
  />
);

InputField.propTypes = {
  input: PropTypes.instanceOf(Object),
  label: PropTypes.string,
  autoComplete: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.objectOf(PropTypes.any),
  autoFocus: PropTypes.bool,
};

InputField.defaultProps = {
  input: {},
  label: '',
  autoComplete: '',
  name: '',
  id: '',
  type: 'text',
  meta: {},
  autoFocus: false,
};

export default InputField;
