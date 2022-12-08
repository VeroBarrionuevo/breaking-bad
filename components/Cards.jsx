import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



function Cards(){
    return(
    <>
    <h3>Esta sección tendrá las cards</h3>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Walter White"
        height="140"
        image="../static/images/cards/Walter_White.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            Walter White
        </Typography>
        <Typography variant="body2" color="text.secondary">
        También conocido por su seudónimo clandestino "Heisenberg", 
        es un químico y profesor de química de Albuquerque, Nuevo México que, tras ser diagnosticado 
        con cáncer de pulmón inoperable, decide empezar a fabricar metanfetamina para poder mantener 
        a su familia provista de cara al futuro.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </>
    )

}

export default Cards


