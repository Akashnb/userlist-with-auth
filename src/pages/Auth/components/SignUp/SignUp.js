import * as React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { Field, reduxForm, Form } from 'redux-form';

import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

import InputField from "../../../../common/Input";

const SignUp = ({ handleSubmit, submitForm }) => (
  <Container component="main" maxWidth="xs">
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <Box sx={{ mt: 3 }}>
        <Form onSubmit={handleSubmit(submitForm)}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Field
                autoFocus={true}
                autoComplete="fname"
                name="firstName"
                id="firstName"
                label="First Name"
                component={InputField}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                component={InputField}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                component={InputField}
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
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
        </Form>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link to="/signin">
              <Typography variant="subtitle1" component="div">
                Already have an account? Sign in
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  </Container>
);

SignUp.propTypes = {
  handleSubmit: PropTypes.func,
  submitForm: PropTypes.func,
};

SignUp.defaultProps = {
  handleSubmit: () => {},
  submitForm: () => {},
};

export default reduxForm({
  form: 'SignUp', // a unique identifier for this form
})(SignUp);