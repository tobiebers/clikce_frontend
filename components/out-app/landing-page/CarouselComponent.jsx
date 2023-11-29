import React from 'react';
import { Carousel } from 'react-bootstrap';

export default function CarouselComponent() {
  return (
    <Carousel>
      <Carousel.Item className="carousel-item carousel-item-1">
        <Carousel.Caption>
          <h3>Titel 1</h3>
          <p>Beschreibung für das erste Bild.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-item carousel-item-2">
        <Carousel.Caption>
          <h3>Titel 2</h3>
          <p>Beschreibung für das zweite Bild.</p>
        </Carousel.Caption>
      </Carousel.Item>
        <Carousel.Item className="carousel-item carousel-item-1">
        <Carousel.Caption>
          <h3>Titel 3</h3>
          <p>Beschreibung für das dritte Bild.</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* Weitere Carousel.Items mit den entsprechenden Klassen */}
    </Carousel>
  );
}
