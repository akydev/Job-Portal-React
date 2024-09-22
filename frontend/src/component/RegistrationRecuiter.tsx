// import { useNavigate } from "react-router-dom";
// import { IRegistrationRecuiter } from "../interface/IRegistrationRecruiter";
// import * as Yup from "yup";
// import { useFormik } from "formik";
// import axios, { AxiosResponse } from "axios";
// import {
//   Button,
//   Card,
//   CardActions,
//   CardContent,
//   FormControl,
//   Grid,
//   Input,
//   InputLabel,
//   MenuItem,
//   Select,
//   Typography,
//   Box,
//   FormHelperText,
// } from "@mui/material";
// import "../App.css"; // Import the CSS file.

// const initialValues: IRegistrationRecuiter = {
//   category: "",
//   name: "",
//   email: "",
//   password: "",
//   bio: "",
//   phone: 0,
// };

// const validationSchema = Yup.object().shape({
//   category: Yup.string().required("Category is required."),
//   name: Yup.string().required("Name is required."),
//   email: Yup.string().email("Email is invalid.").required("Email is required."),
//   password: Yup.string().required("Password is required."),
//   bio: Yup.string().required("Bio is required."),
//   phone: Yup.string().required("Phone number is required."),
// });

// export default function Signup() {
//   const nav = useNavigate();
//   const { handleSubmit, handleChange, handleBlur, errors, touched, values } =
//     useFormik({
//       initialValues,
//       validationSchema,
//       onSubmit: (values, actions) => {
//         axios
//           .post("http://localhost:4444/auth/signup", values)
//           .then((res: AxiosResponse) => {
//             console.log(res);
//             nav("/some-path"); // Example redirection
//           })
//           .catch((error) => {
//             console.log(error);
//           });
//       },
//     });

//   return (
//     <Grid
//       container
//       justifyContent="center"
//       alignItems="center"
//       style={{ minHeight: "100vh" }} // Full viewport height for centering
//     >
//       <Grid item xs={12} sm={8} md={6}>
//         {" "}
//         {/* Responsive card size */}
//         <Box className="centered-box">
//           <Card sx={{ minWidth: 275 }}>
//             <CardContent>
//               <Typography
//                 gutterBottom
//                 sx={{ color: "text.primary", fontSize: 34 }}
//               >
//                 Sign Up
//               </Typography>

//               <form onSubmit={handleSubmit}>
//                 <Grid container spacing={2}>
//                   <Grid item xs={12}>
//                     <FormControl
//                       fullWidth
//                       variant="standard"
//                       error={touched.category && Boolean(errors.category)}
//                     >
//                       <InputLabel id="category-label">Category</InputLabel>
//                       <Select
//                         labelId="category-label"
//                         id="category"
//                         name="category"
//                         value={values.category}
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                       >
//                         <MenuItem value="Applicant">Applicant</MenuItem>
//                         <MenuItem value="Recruiter">Recruiter</MenuItem>
//                       </Select>
//                       {touched.category && errors.category && (
//                         <FormHelperText>{errors.category}</FormHelperText>
//                       )}
//                     </FormControl>
//                   </Grid>

//                   {["name", "email", "password", "bio", "phone"].map(
//                     (field) => (
//                       <Grid item xs={12} key={field}>
//                         <FormControl
//                           fullWidth
//                           variant="standard"
//                           error={touched[field] && Boolean(errors[field])}
//                         >
//                           <InputLabel htmlFor={field}>
//                             {field.charAt(0).toUpperCase() + field.slice(1)}
//                           </InputLabel>
//                           <Input
//                             name={field}
//                             type={field === "password" ? "password" : "text"}
//                             onChange={handleChange}
//                             onBlur={handleBlur}
//                             value={values[field]}
//                           />
//                           {touched[field] && errors[field] && (
//                             <FormHelperText>{errors[field]}</FormHelperText>
//                           )}
//                         </FormControl>
//                       </Grid>
//                     )
//                   )}

//                   <Grid item xs={12}>
//                     <Button type="submit" variant="contained" color="primary">
//                       Sign Up
//                     </Button>
//                   </Grid>
//                 </Grid>
//               </form>
//             </CardContent>
//             <CardActions>
//               <Button size="small">Learn More</Button>
//             </CardActions>
//           </Card>
//         </Box>
//       </Grid>
//     </Grid>
//   );
// }

import { useNavigate } from "react-router-dom";
import { IRegistrationRecuiter } from "../interface/IRegistrationRecruiter";
import * as Yup from "yup";
import { useFormik } from "formik";
import axios, { AxiosResponse } from "axios";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  Box,
  FormHelperText,
  AppBar,
  Toolbar,
} from "@mui/material";
import "../App.css"; // Import the CSS file.

const initialValues: IRegistrationRecuiter = {
  category: "",
  name: "",
  email: "",
  password: "",
  bio: "",
  phone: +9100022322,
};

const validationSchema = Yup.object().shape({
  category: Yup.string().required("Category is required."),
  name: Yup.string().required("Name is required."),
  email: Yup.string().email("Email is invalid.").required("Email is required."),
  password: Yup.string().required("Password is required."),
  bio: Yup.string().required("Bio is required."),
  phone: Yup.string().required("Phone number is required."),
});

export default function Signup() {
  const navigate = useNavigate();
  const { handleSubmit, handleChange, handleBlur, errors, touched, values } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: (values, actions) => {
        axios
          .post("http://localhost:4444/auth/signup", values)
          .then((res: AxiosResponse) => {
            console.log(res);
            // nav("/some-path"); // Example redirection
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
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <a onClick={() => navigate("/")}>My Job Portal</a>
          </Typography>
          {/* <Typography variant="h6" sx={{ flexGrow: 1 }}>
            My Job Portal
          </Typography> */}
          <Button color="inherit" onClick={() => navigate("/login")}>
            Login
          </Button>
          <Button color="inherit" onClick={() => navigate("/registration")}>
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>

      <Grid item xs={12} sm={8} md={6}>
        <Box className="centered-box">
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography
                gutterBottom
                sx={{ color: "text.primary", fontSize: 34 }}
              >
                Sign Up
              </Typography>

              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <FormControl
                      fullWidth
                      variant="standard"
                      error={touched.category && Boolean(errors.category)}
                    >
                      <InputLabel id="category-label">Category</InputLabel>
                      <Select
                        labelId="category-label"
                        id="category"
                        name="category"
                        value={values.category}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        <MenuItem value="Applicant">Applicant</MenuItem>
                        <MenuItem value="Recruiter">Recruiter</MenuItem>
                      </Select>
                      {touched.category && errors.category && (
                        <FormHelperText>{errors.category}</FormHelperText>
                      )}
                    </FormControl>
                  </Grid>

                  <Grid item xs={12}>
                    <FormControl
                      fullWidth
                      variant="standard"
                      error={touched.name && Boolean(errors.name)}
                    >
                      <InputLabel htmlFor="name">Name</InputLabel>
                      <Input
                        name="name"
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                      />
                      {touched.name && errors.name && (
                        <FormHelperText>{errors.name}</FormHelperText>
                      )}
                    </FormControl>
                  </Grid>

                  <Grid item xs={12}>
                    <FormControl
                      fullWidth
                      variant="standard"
                      error={touched.email && Boolean(errors.email)}
                    >
                      <InputLabel htmlFor="email">Email</InputLabel>
                      <Input
                        name="email"
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                      {touched.email && errors.email && (
                        <FormHelperText>{errors.email}</FormHelperText>
                      )}
                    </FormControl>
                  </Grid>

                  <Grid item xs={12}>
                    <FormControl
                      fullWidth
                      variant="standard"
                      error={touched.password && Boolean(errors.password)}
                    >
                      <InputLabel htmlFor="password">Password</InputLabel>
                      <Input
                        name="password"
                        type="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                      />
                      {touched.password && errors.password && (
                        <FormHelperText>{errors.password}</FormHelperText>
                      )}
                    </FormControl>
                  </Grid>

                  <Grid item xs={12}>
                    <FormControl
                      fullWidth
                      variant="standard"
                      error={touched.bio && Boolean(errors.bio)}
                    >
                      <InputLabel htmlFor="bio">Bio</InputLabel>
                      <Input
                        name="bio"
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.bio}
                      />
                      {touched.bio && errors.bio && (
                        <FormHelperText>{errors.bio}</FormHelperText>
                      )}
                    </FormControl>
                  </Grid>

                  <Grid item xs={12}>
                    <FormControl
                      fullWidth
                      variant="standard"
                      error={touched.phone && Boolean(errors.phone)}
                    >
                      <InputLabel htmlFor="phone">Phone</InputLabel>
                      <Input
                        name="phone"
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phone}
                      />
                      {touched.phone && errors.phone && (
                        <FormHelperText>{errors.phone}</FormHelperText>
                      )}
                    </FormControl>
                  </Grid>

                  <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary">
                      Sign Up
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Box>
      </Grid>
    </Grid>
  );
}
