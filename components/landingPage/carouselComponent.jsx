import React from 'react';
import { Carousel } from 'react-bootstrap';
import styles from '@/styles/carousel.module.css';

export default function CarouselComponent() {
  return (
    <>
      <link href="https://fonts.googleapis.com/css?family=Titillium+Web:400,700&display=swap" rel="stylesheet" />
      <Carousel className={styles.carousel}>
        <Carousel.Item className={styles["main-post"]}>
          <img className={`d-block w-100 ${styles["main-post__image"]}`} src="/PlaceHolder.jpg" alt="First slide" />
          <div className={styles["main-post__content"]}>
            {/* Hier können Sie zusätzlichen Inhalt für den ersten Slide hinzufügen */}
          </div>
        </Carousel.Item>

        <Carousel.Item className={styles["main-post"]}>
          <img className={`d-block w-100 ${styles["main-post__image"]}`} src="/PlaceHolder.jpg" alt="Second slide" />
          <div className={styles["main-post__content"]}>
            {/* Hier können Sie zusätzlichen Inhalt für den zweiten Slide hinzufügen */}
          </div>
        </Carousel.Item>

        <Carousel.Item className={styles["main-post"]}>
          <img className={`d-block w-100 ${styles["main-post__image"]}`} src="/PlaceHolder.jpg" alt="Third slide" />
          <div className={styles["main-post__content"]}>
            {/* Hier können Sie zusätzlichen Inhalt für den dritten Slide hinzufügen */}
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
