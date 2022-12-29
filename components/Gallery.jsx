import React from 'react'
import styles from "../styles/Gallery.module.css"
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useState } from 'react';
import { Button } from '@mui/material';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const Gallery = () => {

  const [likes,setLikes] = useState(0);

  return (

    <><h3 className={styles.h3} > | Gallery</h3>
   
    <ImageList
      sx={{ width: 1072, height: 625 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    <Button variant='contained' color='success' size="small"
    onClick={() => setLikes(likes+1)}>{likes} likes</Button>
    </>
  ); 
} 




const itemData = [
  {
    img: 'https://cdn.mos.cms.futurecdn.net/iPgBzYHZpG54etp7bT2h8J.jpg',
   
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://assets1.ignimgs.com/2018/06/22/total-rickall-1529699545279.png',
   
  },
  {
    img: 'https://filmdaily.co/wp-content/uploads/2018/05/rick-and-morty-renewed-1300x731.jpg',
   
  },
  {
    img: 'https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Ffansided.com%2Ffiles%2F2020%2F04%2FRooftop-Lamentations-_-Rick-and-Morty-_-adult-swim.jpg',

    cols: 2,
  },
  {
    img: 'https://filmdaily.co/wp-content/uploads/2018/01/rick-and-morty-1-1300x731.jpg',

    cols: 2,
  },
  {
    img: 'https://www.fortressofsolitude.co.za/wp-content/uploads/2021/06/5-Best-Rick-and-Morty-Episodes-So-Far.png',
    
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://cdn.vox-cdn.com/thumbor/9G23HiyZAiaijT9f0gwCLP-ORAM=/254x0:1874x1215/1400x1400/filters:focal(254x0:1874x1215):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/46828504/RAM_S2_Ep205.0.0.jpg',
    
  },
  {
    img: 'https://cdn.ponly.com/wp-content/uploads/Rick-and-Morty-Quotes-scaled.jpeg',
    
  },
  {
    img: 'https://assets1.ignimgs.com/2018/06/22/the-ricks-must-be-crazy-1529699545274.png',
    
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://www.nag.co.za/wp-content/uploads/2022/08/Nag-Best-Episodes-07.jpg',
    
    rows: 2,
    cols: 2,
  },
  

];

export default Gallery