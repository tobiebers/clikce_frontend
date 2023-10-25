import React from 'react';
import { Carousel } from 'react-bootstrap';

export default function CarouselComponent() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src="/PlaceHolder.jpg" alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="/PlaceHolder.jpg" alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="/PlaceHolder.jpg" alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}
