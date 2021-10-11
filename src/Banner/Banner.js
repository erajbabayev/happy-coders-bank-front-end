import { SignalWifiStatusbarConnectedNoInternet4Sharp } from '@mui/icons-material';
import React from 'react'
import { Carousel } from 'react-bootstrap';
import styles from "../Header/Navibar.module.css"
import Slider1 from "../Images/bannerPictures/Slider-1.jpeg"
import Slider2 from "../Images/bannerPictures/Slider-2.jpeg"
import Slider3 from "../Images/bannerPictures/Slider-3.jpeg"
import Slider4 from "../Images/bannerPictures/Slider-4.jpeg"
import Slider5 from "../Images/bannerPictures/Slider-5.jpeg"

function Banner() {
    return (
      <Carousel className={styles.banner}>
        <Carousel.Item>
          <img className="d-block w-100" src={Slider1} alt="First slide" />
          <Carousel.Caption>
            {/* <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={Slider2} alt="Second slide" />
          <Carousel.Caption>
            {/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={Slider3} alt="Third slide" />
          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={Slider4} alt="Third slide" />
          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={Slider5} alt="Third slide" />
          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    );
}

export default Banner
