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

                <li>MTD Bank</li>
                <li>West road, F1 456 Tram Town.</li>
                <li>Office No 2312s</li>
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
