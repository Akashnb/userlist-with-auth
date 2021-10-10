import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Field, reduxForm, Form } from 'redux-form';

import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import InputField from "../../../../common/Input";

const SignIn = ({ handleSubmit, submitForm }) => (
  <Container component="main" maxWidth="xs">
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <Box sx={{ mt: 3 }}>
        <Form onSubmit={handleSubmit(submitForm)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Field
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                component={InputField}
                autoFocus={true}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                component={InputField}
              />
            </Grid>
          </Grid>
          <Button
            sx={{ mt: 3, mb: 2 }}
            type="submit"
            fullWidth
            variant="contained"
          >
            Sign In
          </Button>
        </Form>
        <Grid container>
          <Grid item>
            <Link to="/signup">
              <Typography variant="subtitle1" component="div">
                Don't have an account? Sign Up
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  </Container>
);

SignIn.propTypes = {
  handleSubmit: PropTypes.func,
  submitForm: PropTypes.func,
};

SignIn.defaultProps = {
  handleSubmit: () => {},
  submitForm: () => {},
};

export default reduxForm({
  form: 'SignIn',
})(SignIn);