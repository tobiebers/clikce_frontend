import React from 'react';
import { Carousel } from 'react-bootstrap';

export default function CarouselComponent() {
  return (
    <Carousel>
      <Carousel.Item className="carousel-item carousel-item-1">
        <Carousel.Caption>
          <h3>Analytics</h3>
          <p>Analysieren sie ihre Performance.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-item carousel-item-2">
        <Carousel.Caption>
          <h3>Accounts</h3>
          <p>Fügen sie Indiviteull viele Accounts hinzu.</p>
        </Carousel.Caption>
      </Carousel.Item>
        <Carousel.Item className="carousel-item carousel-item-3">
        <Carousel.Caption>
          <h3>Posts</h3>
          <p>Planen sie ihre Posts im vorraus.</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* Weitere Carousel.Items mit den entsprechenden Klassen */}
    </Carousel>
  );
}
