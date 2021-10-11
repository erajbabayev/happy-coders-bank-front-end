import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import image from "../../Images/ebank.f769f405.png";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import ConstructionIcon from "@mui/icons-material/Construction";
import styles from "./MainPage.module.css";


function Card() {
  return (
    <div className={styles.container}>
      <Row>
        <Col md={12} lg={4}>
          <img src={image} alt="" />
        </Col>
        <Col md={12} lg={8}>
          <Row className={styles.card}>
            <h2>Everything is possible. We can help you achieve your goals!</h2>
          </Row>
          <Row className={styles.card}>
            <p>
              Internet Banking is a convenient way to do banking from the
              comfort of your home or office. Avoid the queue or delays and try
              our simple and secure Internet Banking facility for an unmatched
              online banking experience.
            </p>
          </Row>
          <Row className={styles.card2}>
            <Col md={2} lg={1} className={styles.icon2}>
              <ManageAccountsIcon className={styles.icon} />
            </Col>
            <Col md={10} lg={7}>
              <p>
                Just login today using your User ID and Password to experience
                the Internet Banking
              </p>
            </Col>
          </Row>
          <Row className={styles.card2}>
            <Col md={2} lg={1} className={styles.icon2}>
              <ConstructionIcon className={styles.icon} />
            </Col>
            <Col md={10} lg={7}>
              <p>
                With E-Banking Check Account Statement , Do Payments using Net
                Banking , Order Cheque Book and many more financial and
                non-financial services
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Card;
