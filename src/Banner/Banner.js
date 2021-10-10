import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import Banner1 from "../Images/bannerPictures/Slider-1.jpeg"
import Banner2 from "../Images/bannerPictures/Slider-2.jpeg"
import Banner3 from "../Images/bannerPictures/Slider-3.jpeg"
import Banner4 from "../Images/bannerPictures/Slider-4.jpeg"
import Banner5 from "../Images/bannerPictures/Slider-5.jpeg"
import styles from "../Header/Navibar.module.css"

const items = [
  {
    src: Banner1 ,
    altText: "Slide 1",
    caption: "Slide 1",
    header: "Slide 1 Header",
    key: "1",
  },
  {
    src:  Banner2 ,
    altText: "Slide 2",
    caption: "Slide 2",
    header: "Slide 2 Header",
    key: "2",
  },
  {
    src: Banner3 ,
    altText: "Slide 3",
    caption: "Slide 3",
    header: "Slide 3 Header",
    key: "3",
  },
  {
    src:  Banner4 ,
    altText: "Slide 4",
    caption: "Slide 4",
    header: "Slide 4 Header",
    key: "4",
  },
  {
    src: Banner5 ,
    altText: "Slide 5",
    caption: "Slide 5",
    header: "Slide 5 Header",
    key: "5",
  },
];

const Example = () => <UncontrolledCarousel className={styles.banner} items={items} />;

export default Example;