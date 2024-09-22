import React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  Toolbar,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <a onClick={() => navigate("/")}>My Job Portal</a>
          </Typography>

          {/* <Typography variant="h6" sx={{ flexGrow: 1 }}>
            My Job portal
          </Typography> */}
          <Button color="inherit" onClick={() => navigate("/login")}>
            Login
          </Button>
          <Button color="inherit" onClick={() => navigate("/registration")}>
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: "80vh",
          backgroundColor: "#f5f5f5",
          textAlign: "center",
        }}
      >
        <Container>
          <Typography variant="h2" gutterBottom>
            Welcome to Our Service
          </Typography>
          <Typography variant="h5" gutterBottom>
            We offer the best solutions for your needs.
          </Typography>
          <Button variant="contained" size="large">
            Get Started
          </Button>
        </Container>
      </Box>

      <Container sx={{ my: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Features
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image="https://via.placeholder.com/300"
                alt="Feature 1"
              />
              <CardContent>
                <Typography variant="h5">Feature One</Typography>
                <Typography variant="body2">
                  Description of Feature One. It does amazing things!
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image="https://via.placeholder.com/300"
                alt="Feature 2"
              />
              <CardContent>
                <Typography variant="h5">Feature Two</Typography>
                <Typography variant="body2">
                  Description of Feature Two. You will love it!
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image="https://via.placeholder.com/300"
                alt="Feature 3"
              />
              <CardContent>
                <Typography variant="h5">Feature Three</Typography>
                <Typography variant="body2">
                  Description of Feature Three. It's really helpful!
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ py: 3, backgroundColor: "#f5f5f5", textAlign: "center" }}>
        <Typography variant="body1">
          &copy; {new Date().getFullYear()} My Landing Page. All rights
          reserved.
        </Typography>
      </Box>
    </div>
  );
};

export default LandingPage;
