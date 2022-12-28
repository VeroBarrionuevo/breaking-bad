import axios from "axios";
import styles from '../styles/Home.module.css'
import { Box, Typography } from "@mui/system";
import IconButton from '@mui/material/IconButton';
import { useRouter } from "next/router";
import ScienceRoundedIcon from '@mui/icons-material/ScienceRounded';
import { Link } from "@mui/material";


export default function quotes({data}){
    return (
        <Box>
            
            <h3 className={styles.title}>Cita random de Breaking Bad</h3>
            {
                data.map(({quote, author}) => (
                    <div>
                        <h4 className={styles.description} key={quote}>"{quote}" - {author}</h4>
                    </div>
                )
                )
            }

        </Box>
        
    )
}

export async function getStaticProps (){
    try {
        const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes')
        const data = await res.json()
        return (
            {props: {
                data:data}
            }
        )
    } catch (error) {
        console.log(error)
    }
}

