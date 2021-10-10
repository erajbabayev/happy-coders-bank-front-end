import { Grid, TableCell, TableRow } from '@mui/material'
import SilverCard from "../../Images/silver.7243f28b.jpg"
import GoldCard from "../../Images/gold.78dfdb4c.jpg"
import PlatiniumCard from "../../Images/platinum.ca5ba634.jpg"
import React from 'react'
import styles from "./MainPage.module.css"

function MainThird() {
    return (
      <Grid container className={styles.creditCards} spacing={2}>
        <Grid item xs={4}>
          <h2>Silver</h2>
          <p>
            Basic package with interactive features. Enjoy up to 20% discount at
            select restaurants.You don’t have to pay any additional fee.
          </p>
          <TableRow>
            <TableCell>
              <h3>$300</h3>
            </TableCell>
            <TableCell>
              <img src={SilverCard} alt="" />
            </TableCell>
          </TableRow>
        </Grid>
        <Grid item xs={4}>
          <h2>Gold</h2>
          <p>
            Bank of States has partnered with leading travel providers to bring
            offers on airline tickets, hotel stays, car hire and 
             much more...
          </p>
          <TableRow>
            <TableCell>
              <h3>$500</h3>
            </TableCell>
            <TableCell>
              <img src={GoldCard} alt="" />
            </TableCell>
          </TableRow>
        </Grid>
        <Grid item xs={4}>
          <h2>Platinium</h2>
          <p>
            Get up to 5 supplementary cards for your family members. You don’t
            have to pay any additional fee and can choose the spending limit on
            each card.
          </p>
          <TableRow>
            <TableCell>
              <h3>$1000</h3>
            </TableCell>
            <TableCell>
              <img src={PlatiniumCard} alt="" />
            </TableCell>
          </TableRow>
        </Grid>
      </Grid>
    );
}

export default MainThird
