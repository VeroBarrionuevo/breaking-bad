import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import LoginIcon from "@mui/icons-material/Login";
import GoogleIcon from "@mui/icons-material/Google";
import { useState } from "react";
import { useAuth } from "../hook/useAuth";

import {
  Box,
  Stack,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  TextField,
  Button,
  Alert,
} from "@mui/material";


const Login = () => {
  const { logIn, googleLogIn } = useAuth();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [errorLogIn, setErrorLogIn] = useState("");

  const router = useRouter();

  const handleChangeEmail = ({ target }) => {
    setEmail(target.value);
  };

  const handleChangePassword = ({ target }) => {
    setPassword(target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await logIn(email, password);
      router.push("/");
    } catch (error) {
      setErrorLogIn(error.message);
    }
  };

  const handleGoogleLogIn = async () => {
    try {
      await googleLogIn();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  
  return (
    <>
      <Head>
        <title>Breaking Bad | Wiki - Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        sx={{
          position: "relative",
          minHeight: "100vh",
          width: "100vw",
        }}
      >

        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: { xs: "center", lg: "end" },
            alignItems: "center",
            bgcolor: "rgba(0,0,0,0.6)",
            paddingX: "24px",
            paddingBottom: { xs: 0, lg: "16px" },
          }}
        >
          <Card
            sx={{
              width: { xs: "100%", sm: 420, md: 450, lg: 500 },
            }}
          >
            <CardMedia
              component="img"
              height="250"
              image="https://cdn.ponly.com/wp-content/uploads/Rick-and-Morty-Quotes-scaled.jpeg"
              alt="sunset"
            />

            <CardContent component="div">
              <Typography gutterBottom variant="h5" align="center">
                Iniciar Sesión
              </Typography>

              {errorLogIn && (
                <Alert
                  sx={{ marginY: "16px" }}
                  severity="info"
                  variant="standard"
                >
                  {errorLogIn}
                </Alert>
              )}

              <Box onSubmit={handleSubmit} component="form">
                <TextField
                  id="outlined-basic"
                  label="Email"
                  type="email"
                  variant="outlined"
                  color="info"
                  fullWidth={true}
                  sx={{ marginBottom: "10px" }}
                  value={email}
                  onChange={handleChangeEmail}
                />

                <TextField
                  id="filled-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  variant="outlined"
                  color="info"
                  fullWidth={true}
                  value={password}
                  onChange={handleChangePassword}
                />

                <CardActions>
                  <Button
                    sx={{ marginY: "10px" }}
                    variant="contained"
                    color="info"
                    fullWidth={true}
                    endIcon={<LoginIcon />}
                    type="submit"
                  >
                    Inicar
                  </Button>
                </CardActions>
              </Box>

              <Typography variant="body1" align="center">
                Iniciar sesión con
              </Typography>

              <Stack
                component="div"
                direction={{ xs: "column", md: "row" }}
                justifyContent="center"
                alignItems="center"
                spacing={2}
                marginY={1}
              >
                <Button
                  onClick={handleGoogleLogIn}
                  variant="contained"
                  startIcon={<GoogleIcon />}
                  color="warning"
                >
                  Google
                </Button>

              </Stack>

              <Box textAlign="center">
                <Typography gutterBottom variant="body2" component="span">
                  ¿Estás registrado?
                </Typography>
                <Link
                  style={{
                    color: "#ae0000",
                    fontWeight: "bold",
                    marginLeft: "8px",
                  }}
                  href="/signup"
                >
                  Registrarse
                </Link>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </>
  );
};

export default Login;
