import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import ScienceRoundedIcon from '@mui/icons-material/ScienceRounded';
import style from '../styles/NavBar.module.css'


export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className= {style.container} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <ScienceRoundedIcon/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Breaking Bad
          </Typography>
          <IconButton>
            <LoginRoundedIcon/>
          </IconButton>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}