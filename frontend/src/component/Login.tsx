import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ILogin } from "../interface/ILogin";
import * as Yup from "yup";
import axios, { AxiosResponse } from "axios";
import { FormControl, Grid, Input, InputLabel, Button } from "@mui/material";

const initialValues: ILogin = {
  email: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Email is invalid!").required("Email is required."),
  password: Yup.string().required("Password is required."),
});

export default function Login() {
  const nav = useNavigate();
  const { handleSubmit, handleChange, handleBlur, errors, touched, values } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: (values, action) => {
        axios
          .post("http://localhost:4444/auth/login", values)
          .then((res: AxiosResponse) => {
            console.log(res);
          })
          .catch((error) => {
            console.log(error);
          });
      },
    });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <FormControl fullWidth variant="standard">
              <InputLabel htmlFor="email">Email</InputLabel>
              <Input
                name="email"
                type="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            </FormControl>
          </Grid>

          <Grid item xs={8}>
            <FormControl fullWidth variant="standard">
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                name="password"
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
            </FormControl>
          </Grid>

          <Grid item xs={8}>
            <Button type="submit" variant="contained" color="primary">
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
