import React, { useEffect } from "react";
import styles from "../styles/Hero.module.css"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useRouter } from "next/router";
import { useState} from "react";
import {
    Container,
    Grid,
    Box,
    Typography,
    CircularProgress,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
  } from "@mui/material"
  
function Hero(){
    
    const router = useRouter();
   function handleRoute(e){
    e.preventDefault();
    router.push(`/quotes`)
   }
    return(
 

    <section size="large" className= {styles.container} sx={{ flexGrow: 12 }}>
        <Stack spacing={8} direction="row" className={styles.buttons}>
        <Button size="small" className= {styles.button} variant="contained">Personajes</Button>
        <Button className= {styles.button} variant="contained">Episodios</Button>
        <Button size="large" className= {styles.button} variant="contained" onClick={handleRoute}>Citas</Button>
 
        <Button className= {styles.button} variant="contained">Muertes</Button>
        </Stack>

    </section>
    )


    }



export default Hero