import React from 'react'
import { Table, Grid, TableRow, Container, TableCell } from "@mui/material";
import image from "../../Images/ebank.f769f405.png";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import ConstructionIcon from "@mui/icons-material/Construction";
import styles from "./MainPage.module.css";



function MainSecond() {
    return (
      <Grid
        className={styles.second}
        container
        spacing={7}
        style={{ paddingTop: "30px" }}
      >
        <Grid  item xs={4}>
          <img src={image} alt="" />
        </Grid>
        <Grid item xs={8} className={styles.grid}>
          <Table className={styles.table}>
            <TableRow></TableRow>
            <TableRow>
              <h4>About The E-Banking</h4>
            </TableRow>
            <TableRow>
              <h2>
                Everything is possible. We can help you achieve your goals!
              </h2>
            </TableRow>
            <TableRow>
              <p>
                Internet Banking is a convenient way to do banking from the
                comfort of your home or office. Avoid the queue or delays and
                try our simple and secure Internet Banking facility for an
                unmatched online banking experience.
              </p>
            </TableRow>
            <TableRow>
              <Grid container>
                <Grid item xs={1} className={styles.grid}>
                  <ManageAccountsIcon className={styles.icon} />
                </Grid>
                <Grid item xs={10}>
                  <p>
                    Just login today using your User ID and Password to
                    experience the Internet Banking
                  </p>
                </Grid>
              </Grid>
            </TableRow>
            <TableRow>
              <Grid container>
                <Grid item xs={1} className={styles.grid}>
                  <ConstructionIcon className={styles.icon} />
                </Grid>
                <Grid item xs={10}>
                  <p>
                    With E-Banking Check Account Statement , Do Payments using
                    Net Banking , Order Cheque Book and many more financial and
                    non-financial services
                  </p>
                </Grid>
              </Grid>
            </TableRow>
          </Table>
        </Grid>
      </Grid>
    );
}

export default MainSecond
