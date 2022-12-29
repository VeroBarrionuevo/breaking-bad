import React from "react";
import { useState } from "react";
import {
  AppBar,
  Box,
  Stack,
  Toolbar,
  Typography
} from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {

  
  return (
    <footer>
      <Box>
        <AppBar
          sx={{
            width: 1349,
            height: 120,
            position: "static",
            background: "linear-gradient(to top, #bb789f, #c58b6e)",
          }}
        >
          <Toolbar
            sx={{
              height: "200px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <Typography sx={{ fontWeight: "bold" }}>
              Rick and Morty | Wiki - Hecho por Verónica Barrionuevo
            </Typography>
            <Typography>Copyright &copy; 2022 - Todos los derechos reservados.</Typography>
          

            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={12}
            >
              <a
                href="https://github.com/VeroBarrionuevo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon fontSize="large" sx={{ color: "white" }} />
              </a>

              <a
                href="https://www.linkedin.com/in/veronicab/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon fontSize="large" sx={{ color: "white" }} />
              </a>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
    </footer>
  );
};

export default Footer;


