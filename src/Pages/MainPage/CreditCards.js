import React from "react";
import {  Row, Col } from "react-bootstrap";
import styles from "./MainPage.module.css";
import SilverCard from "../../Images/silver.7243f28b.jpg";
import GoldCard from "../../Images/gold.78dfdb4c.jpg";
import PlatiniumCard from "../../Images/platinum.ca5ba634.jpg";

function CreditCards() {
  return (
    <div className={styles.container2}>
      <Row>
        <Col md={12} lg={4}>
          <h3>Silver</h3>
        </Col>
        <Col md={12} lg={4}>
          <h3>Gold</h3>
        </Col>
        <Col md={12} lg={4}>
          <h3>Platinium</h3>
        </Col>
      </Row>
      <Row>
        <Col md={12} lg={4}>
          <p>
            Basic package with interactive features. Enjoy up to 20% discount at
            select restaurants.You don’t have to pay any additional fee.
          </p>
        </Col>
        <Col md={12} lg={4}>
          <p>
            Bank of States has partnered with leading travel providers to bring
            offers on airline tickets, hotel stays, car hire and much more...
          </p>
        </Col>
        <Col md={12} lg={4}>
          <p>
            Get up to 5 supplementary cards for your family members. You don’t
            have to pay any additional fee and can choose the spending limit on
            each card.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={3} lg={1} className={styles.prices}>
          <h2>$300</h2>
        </Col>
        <Col className={styles.creditCards} md={9} lg={3}>
          <img src={SilverCard} alt="" />
        </Col>
        <Col md={3} lg={1} className={styles.prices}>
          <h2>$500</h2>
        </Col>
        <Col className={styles.creditCards} md={9} lg={3}>
          <img src={GoldCard} alt="" />
        </Col>
        <Col md={3} lg={1} className={styles.prices}>
          <h2>$1000</h2>
        </Col>
        <Col className={styles.creditCards} md={9} lg={3}>
          <img src={PlatiniumCard} alt="" />
        </Col>
      </Row>
    </div>
  );
}

export default CreditCards;
