import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ILogin } from "../interface/ILogin";
import * as Yup from "yup";
import axios, { AxiosResponse } from "axios";
import {
  FormControl,
  Grid,
  Input,
  InputLabel,
  Button,
  Card,
  CardContent,
  Typography,
  CardActions,
} from "@mui/material";
import "../App.css"; // Import the CSS file
import BasicHeader from "./BasicHeader";

const initialValues: ILogin = {
  email: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Email is invalid!").required("Email is required."),
  password: Yup.string().required("Password is required."),
});

export default function Login() {
  const navigate = useNavigate();
  const { handleSubmit, handleChange, handleBlur, errors, touched, values } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: (values, action) => {
        axios
          .post("http://localhost:4444/auth/login", values)
          .then((res: AxiosResponse) => {
            console.log(res);
            // Navigate or perform actions upon successful login
            // Example: nav('/dashboard');
          })
          .catch((error) => {
            console.log(error);
          });
      },
    });

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh" }} // Full viewport height for centering
    >
      <BasicHeader />

      <Grid item xs={12} sm={8} md={6}>
        {/* Responsive card size */}
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              gutterBottom
              sx={{ color: "text.primary", fontSize: 34 }}
            >
              Login
            </Typography>

            <form onSubmit={handleSubmit}>
              <Grid container spacing={2} direction="column">
                <Grid item xs={12}>
                  <FormControl fullWidth variant="standard">
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Input
                      name="email"
                      type="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      error={touched.email && Boolean(errors.email)}
                    />
                    {touched.email && errors.email && (
                      <div style={{ color: "red" }}>{errors.email}</div>
                    )}
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <FormControl fullWidth variant="standard">
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input
                      name="password"
                      type="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      error={touched.password && Boolean(errors.password)}
                    />
                    {touched.password && errors.password && (
                      <div style={{ color: "red" }}>{errors.password}</div>
                    )}
                  </FormControl>
                </Grid>

                <Grid item>
                  <Button type="submit" variant="contained" color="primary">
                    Login
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}
