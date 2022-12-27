import React from "react";
import {Box, Grid,   InputLabel,
  MenuItem,
  FormControl,
  Select,} from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from "../styles/Cards.module.css"
import { useEffect, useState } from "react";


let personajes =[

  {"nombre": "Walter White",
  "alias": "Heisenberg",
  "edad": "50",
  "ocupación": "Profesor de química y fabricante de metanfetamina"},
  
  {"nombre": "Jesse Pinkman",
  "alias": "Cap'n Cook",
  "edad": "20",
  "ocupación": "Fabricante y distribuidor de metanfetamina"},
  
  {"nombre": "Michael Ehrmantraut",
  "alias": "Mike",
  "edad": "60",
  "ocupación": "Sicario e investigador privado"},
  
  {"nombre": "Gustavo Fring",
  "alias": "The Chicken Man",
  "edad": "44",
  "ocupación": "Los Pollos Hermanos co-fundador"},
  
  {"nombre": "Jimmy McGill",
  "alias": "Saul Goodman",
  "edad": "41",
  "ocupación": "Abogado de defensa penal"},

  {"nombre": "Hank Schrader",
  "alias": "Hank",
  "edad": "38",
  "ocupación": "Agente de la DEA"},
  ]

  const Cards = () => {

    const [cardsData, setCardsData] = useState([]);
  
    const [isLoading, setIsLoading] = useState(true);
  
    const [inputSelect, setInputSelect] = useState("Walter White");
  
    const handleChangeSelect = ({ target }) => {
      setInputSelect(target.value);
    };
       

    return(
      <>
        <h3 className={styles.h3} > | Personajes</h3>

        <Box textAlign="center" sx={{ marginY: "2rem" }}>
          <FormControl variant="standard" color="success" margin="dense">
            <InputLabel id="select-character">Filtrar por Personaje</InputLabel>
            <Select
              labelId="select-character"
              value={inputSelect}
              label="Filtrar por Personaje"
              onChange={handleChangeSelect}
              sx={{ width: { xs: 500, sm: 600, md: 700 } }}
            >
              <MenuItem value="Walter White">{personajes[0].nombre}</MenuItem>
              <MenuItem value="Jesse Pinkman">{personajes[1].nombre}</MenuItem>
              <MenuItem value="Michael Ehrmantraut">{personajes[2].nombre}</MenuItem>
              <MenuItem value="Gustavo Fring">{personajes[3].nombre}</MenuItem>
              <MenuItem value="Jimmy McGill">{personajes[4].nombre}</MenuItem>
              <MenuItem value="Hank Schrader">{personajes[5].nombre}</MenuItem>
            </Select>
          </FormControl>
        </Box>
        
        <Box>

          
          <Grid
              container
              spacing={1}
              columns={{ xs: 8, sm: 3, md: 3 }}
              sx={{ justifyContent: "center", alignItems: "center" }}>
        <Card  className={styles.grid} sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="Walter White"
            height="250"
            image="../static/images/cards/Walter_White.jpg"/>
          <CardContent>
            
            <Typography gutterBottom variant="h5" component="div">
                {personajes[0].nombre}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            También conocido por su seudónimo clandestino "{personajes[0].alias}", 
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

        <Card  className={styles.grid} sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
         
            height="250"
            image="../static/images/cards/Jesse_Pinkman.PNG"/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {personajes[1].nombre}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Pinkman es el compañero de Walter White en el tráfico de metanfetamina. En el instituto, Jesse era 
            un consumidor, fabricante y traficante de poca monta. Años después, Jesse se dedica al tráfico de
             droga con el seudónimo "{personajes[1].alias}" y añade polvo de chili a su producto para caracterizarlo.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>

        <Card  className={styles.grid} sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
           
            height="250"
            image="../static/images/cards/Mike.PNG"/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {personajes[2].nombre}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            "{personajes[2].alias}" es el principal secuaz de Gus Fring en su imperio de drogas. También es socio de Saul Goodman,
             para quien trabaja en diversas ocasiones como investigador privado y para solventar diversos problemas. 
             Con el fin del imperio de Gus, acaba pasando a trabajar con Walter y Jesse en un nuevo negocio. 
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>

        <Card  className={styles.grid} sx={{ maxWidth: 345}}>
        


          <CardMedia
            component="img"
            height="250"
            image="../static/images/cards/Gus.PNG"/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {personajes[3].nombre}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            "{personajes[3].alias}" era el líder criminal de un imperio de drogas y el dueño de la cadena de restaurantes 
            Los Pollos Hermanos. Al igual que Walter White, Gus era un criminal que se
             escondía "en plena vista" recurriendo a su posición social como filántropo para ocultar su verdadera naturaleza
              según construía su imperio.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>

        <Card  className={styles.grid} sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="250"
            image="../static/images/cards/JM.PNG"/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {personajes[4].nombre}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Mejor conocido por su alias profesional y comercial "{personajes[4].alias}".
            Como ex estafador y abogado penalista dedicado y eficaz, comenzó a representar 
            a los delincuentes mientras él mismo se involucraba cada vez más en el inframundo criminal de la ciudad, 
            perdiendo lentamente su moralidad en el camino. 
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>

        <Card  className={styles.grid} sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="250"
            image="../static/images/cards/Hank.PNG"/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {personajes[5].nombre}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            "{personajes[5].alias}" Schrader es un oficial de alto rango y cmo agente de la DEA, lideró las investigaciones de la metanfetamina 
            del cocinero "Heisenberg" (desconociendo durante más de un año que en realidad era su propio cuñado), así como 
            Gustavo Fring y su imperio de la droga.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        </Grid> 
        </Box>

      </>
    )
}

export default Cards


