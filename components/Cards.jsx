import React from "react";
import styles from "../styles/Gallery.module.css";
import { useEffect, useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
  IconButton,
} from "@mui/material";
import Link from "next/link";
import axios from "axios";

const Cards = (card) => {
  const [cardsData, setCardsData] = useState(null);

  const fetchData = async () => {
    try {
      const resp = await axios.get("https://rickandmortyapi.com/api/character");

      console.log(resp.data.results);
      setCardsData(resp.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // const [inputSelect, setInputSelect] = useState("Walter White");

  // const handleChangeSelect = ({ target }) => {
  //   setInputSelect(target.value);
  // };

  return (
    <>
      <h3 className={styles.h3}> | Characters</h3>
      <Box
        sx={{
          minHeight: "100vh",
          width: "100%",
          padding: "1rem",
          marginTop: "2rem",
        }}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 6, sm: 6, md: 3 }}
          justifyContent="center"
        >
          {cardsData?.map((card) => (
            <Grid key={card?.id} item>
              <Card
                sx={{ width: { xs: "100%", sm: 300 }, position: "relative" }}
              >
                <CardMedia
                  component="img"
                  height="180"
                  image={card?.image}
                  alt={card?.name}
                />
                <CardContent>
                  <Typography variant="h6" align="center">
                    {card?.name}
                  </Typography>

                  <Link href={`/info/${card?.id}`}>
                    <Button
                      sx={{ marginTop: "20px" }}
                      variant="contained"
                      fullWidth={true}
                      color="info"
                    >
                      More info
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Cards;
