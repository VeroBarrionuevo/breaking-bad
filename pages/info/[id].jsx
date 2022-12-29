import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import {
  Box,
  Stack,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

function Quotes() {
  const [card, setCard] = useState([]);

  const routes = useRouter();

  const fetchData = async () => {
    try {
      const resp = await axios.get(
        `https://rickandmortyapi.com/api/character/${routes.query.id}`
      );

      console.log(resp.data);
      setCard(resp.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [routes.query.id]);

  return (
    <>
      <Card
        sx={{
          width: { xs: "100%", sm: 400, md: 500 },
          padding: "16px 80px",
          marginLeft:"30%",
          backgroundColor: "rgba(250,250,250,0.8)",
        }}
      >
        <CardMedia
          component="img"
          height="300"
          image={card?.image}
          alt={card?.name}
        />
        <CardContent>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={1}
          >
            <Typography variant="h6" align="center">
              {card?.name}
            </Typography>

            <Typography variant="body1" align="center">
              Status: {card?.status}
            </Typography>

            <Typography variant="body1" align="center">
              Gender: {card?.gender}
            </Typography>

            {/* <Typography variant="body1" align="center">
              Origin: {card?.origin.name}
            </Typography> */}

            <Typography variant="body1" align="center">
              Specie: {card?.species}
            </Typography>

            {/* <Typography variant="body1" align="center">
              Location: {card?.location.name}
            </Typography> */}
          </Stack>
        </CardContent>
      </Card>
    </>
  );
}

export default Quotes;
