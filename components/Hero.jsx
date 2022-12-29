import React, { useEffect } from "react";
import styles from "../styles/Hero.module.css";
import { Divider, Item, Stack, Button } from "@mui/material";

function Hero() {
  return (
    <section size="large" className={styles.container} sx={{ flexGrow: 12 }}>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={5}
      >
        <Button
          sx={{ marginTop: "10px", padding: "20px" }}
          variant="contained"
          className={styles.button}
        >
          | Characters
        </Button>
      </Stack>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={5}
      >
        <Button
          sx={{ marginTop: "10px", padding: "20px" }}
          variant="contained"
          className={styles.button}
        >
          | Gallery
        </Button>
      </Stack>
    </section>
  );
}

export default Hero;
