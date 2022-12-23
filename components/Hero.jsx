import React from "react";
import styles from "../styles/Hero.module.css"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


function Hero(){
    return(

    <section size="large" className= {styles.container} sx={{ flexGrow: 12 }}>
        <Stack spacing={8} direction="row" className={styles.buttons}>
        <Button className= {styles.button} variant="contained">Personajes</Button>
        <Button className= {styles.button} variant="contained">Episodios</Button>
        <Button className= {styles.button} variant="contained">Citas</Button>
        <Button className= {styles.button} variant="contained">Muertes</Button>
        </Stack>

    </section>
    )



}



export default Hero