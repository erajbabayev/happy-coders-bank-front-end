import React from "react";
import Banner from "../../Banner/Banner";
import styles from "./MainPage.module.css";

import MainSecond from "./MainSecond";
import MainThird from "./MainThird";

function MainPage() {
  return (
    <div className={styles.container}>
      <Banner />
      <MainSecond />
      <MainThird />
      
    </div>
  );
}

export default MainPage;