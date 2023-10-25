import React from 'react';
import styles from './heroSection.module.css';

export default function HeroSection() {
  return (
    <div className={styles.heroSectionbackground}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2>Abteilung 1</h2>
          <p>Dies ist der Inhalt der ersten Abteilung.</p>
        </div>
        <div className={styles.content}>
          <h2>Abteilung 2</h2>
          <p>Dies ist der Inhalt der zweiten Abteilung.</p>
        </div>
      </div>
    </div>
  );
}