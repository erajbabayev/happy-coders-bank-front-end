import { Grid, Container } from '@mui/material'
import React from 'react'
import styles from "./Footer.module.css"

function Footer() {
    return (
      <div className={styles.footer}>
        <Container>
          <Grid container spacing={10}>
            <Grid item sx={4}>
              <ul>
                <h2>Our Company</h2>

                <li>Happy Coders Bank</li>
                <li>Somewhere in the world</li>
                <li>Most probably US</li>
              </ul>
            </Grid>
            <Grid item sx={2}>
              <ul>
                <h2>Home</h2>
                <li>Links</li>
                <li>FAQ</li>
                <li>About Us</li>
                <li>Contact Us</li>
              </ul>
            </Grid>
            <Grid item sx={2}>
              <ul>
                <h2>Links</h2>
                <li>CEO Message</li>
                <li>Blog</li>
                <li>Group</li>
                <li>Register</li>
              </ul>
            </Grid>
            <Grid item sx={4}>
              <h2>Contact Us</h2>
              <li>Please connect with us through following channels</li>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
}

export default Footer
