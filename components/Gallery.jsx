import React from 'react'
import styles from "../styles/Gallery.module.css"
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function Gallery() {
  return (

    <><h3 className={styles.h3} > | Galeria</h3>

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
    </>
  ); 
} 

const itemData = [
  {
    img: 'https://arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/UFYXLOGMAZEXPH6X6SWJAARIFQ.jpg',
    title: 'Teacher',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://i.ytimg.com/vi/XZ0Gr6HWbbg/maxresdefault.jpg',
    title: 'Burger',
  },
  {
    img: 'https://static.onecms.io/wp-content/uploads/sites/6/2018/07/bbd-2000.jpg',
    title: 'Car',
  },
  {
    img: 'https://sm.ign.com/ign_latam/screenshot/default/gliding-over-all_8pt9.jpg',
    title: 'Money',
    cols: 2,
  },
  {
    img: 'https://acrossthemargin.com/wp-content/uploads/2014/08/4daysout.jpg',
    title: 'Chemical',
    cols: 2,
  },
  {
    img: 'https://vader.news/__export/1625367204944/sites/gadgets/img/2021/06/22/hank-jesse_breaking_bad.jpg_2062789929.jpg',
    title: 'Honey',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://forucinema.com/wp-content/uploads/2021/08/Breaking-Bad-Walt-1024x577.jpg',
    title: 'Dead',
  },
  {
    img: 'https://i.pinimg.com/originals/13/6c/b1/136cb16ae3041cbeb20743c6614a848c.jpg',
    title: 'Fern',
  },
  {
    img: 'https://www.hollywoodreporter.com/wp-content/uploads/2013/08/breaking_bad.jpg?w=2000&h=1126&crop=1',
    title: 'Smoke',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://www.cheatsheet.com/wp-content/uploads/2021/11/Walter-White-Season-4-Finale.jpg',
    title: 'call',
  },
  {
    img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2018%2F07%2Fbbepisode401day6_28cama3_29-94-2000.jpg',
    title: 'Ready',
  },
  {
    img: 'https://i.insider.com/59d269ced7605b52008b48d7?width=1136&format=jpeg',
    title: 'Looking',
    cols: 2,
  },
];