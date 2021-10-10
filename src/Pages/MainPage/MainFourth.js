import { Grid, Container, Button, Divider} from "@mui/material";
import React from "react";
import styles from "./MainPage.module.css"

function MainFourth() {
  return (
    <Container>
      <Grid container>
        <Grid className={styles.boxes} item xs={4}>
          <h1>5.50%</h1>
          <p>For a month</p>
          <Divider />
          <h2>Basic</h2>
        </Grid>
        <Grid className={styles.boxes} item xs={4}>
          <h1>7.50%</h1>
          <p>For a month</p>
          <Divider />
          <h2>Premium</h2>
        </Grid>
        <Grid className={styles.boxes} item xs={4}>
          <h1>9.50%</h1>
          <p>For a month</p>
          <Divider />
          <h2>Advanced Plan</h2>
        </Grid>
      </Grid>

      <Grid container>
        <Grid className={styles.boxes2} item xs={4}>
          <p>Minumum Deposit $1000 Free </p>
          <Divider variant="middle" />
          <p>Maximum Deposit $10000</p>
          <Divider variant="middle" />
          <p>Add upto 5 Users</p>
          <Divider variant="middle" />
          <p>Internet Banking</p>
          <Button variant="contained" color="secondary">
            Apply Now
          </Button>
        </Grid>
        <Grid className={styles.boxes2} item xs={4}>
          <p>Minumum Deposit $500 Free </p>
          <Divider variant="middle" />
          <p>Maximum Deposit $20000</p>
          <Divider variant="middle" />
          <p>Add upto 5 Users</p>
          <Divider variant="middle" />
          <p>Internet Banking</p>
          <Button variant="contained" color="secondary">
            Apply Now
          </Button>
        </Grid>
        <Grid className={styles.boxes2} item xs={4}>
          <p>Minumum Deposit $0 Free </p>
          <Divider variant="middle" />
          <p>Maximum Deposit $50000</p>
          <Divider variant="middle" />
          <p>Add upto 20 Users</p>
          <Divider variant="middle" />
          <p>Internet Banking</p>
          <Button variant="contained" color="secondary">
            Apply Now
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default MainFourth;
