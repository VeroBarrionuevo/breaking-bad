import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";
import style from "../styles/NavBar.module.css";
import { Link } from "@mui/material";
import { useState } from "react";
import { useAuth } from "../hook/useAuth";
import { Stack, Avatar, useMediaQuery, useTheme } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const { user, logOut } = useAuth();
  // console.log(user);

  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickNav = () => {
    setNav(!nav);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className={style.container} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Link href="/" className={style.icon}>
              <RocketLaunchRoundedIcon />
            </Link>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/" className={style.icon}>
              {" "}
              Ricky and Morty | Wiki{" "}
            </Link>
          </Typography>

          {user ? (
            <Stack
              sx={{ display: { xs: "none", md: "block" } }}
              direction="row"
              spacing={3}
            >
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Avatar
                  alt={user?.email}
                  src={user?.photoURL}
                  srcSet={user?.photoURL}
                />

                <Typography variant="body1" component="span">
                  {user?.email}
                </Typography>

                <Button
                  onClick={handleLogOut}
                  variant="contained"
                  color="warning"
                  size="small"
                >
                  Cerrar Sesión
                </Button>
              </Stack>
            </Stack>
          ) : (
            <Stack
              sx={{ display: { xs: "none", md: "block" } }}
              direction="row"
              spacing={2}
            >
              <Link href="/login" className={style.icon}>
                <Button variant="contained" color="success" size="small">
                  Inicia Sesión
                </Button>
              </Link>

              <Link href="/signup" className={style.icon}>
                <Button variant="contained" color="info" size="small">
                  Registrarse
                </Button>
              </Link>
            </Stack>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default NavBar;
