import React from "react";
import Banner from "../../Banner/Banner";
import MainFourth from "./MainFourth";
import styles from "./MainPage.module.css";
import Card from "./Card";
import CreditCards from "./CreditCards"


function MainPage() {
  return (
    <div>
      <Banner />
      <Card />
      <CreditCards />
      <MainFourth />
      
    </div>
  );
}

export default MainPage;
