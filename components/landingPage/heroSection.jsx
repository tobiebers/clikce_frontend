import React from 'react';
import styles from './heroSection.module.css';

export default function HeroSection() {
  return (
    <div className={styles.heroSectionbackground}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles['custom-h2']}>Erfolg in Sozialen</h2>
          <h2 className={styles['custom-h2']}>Medien - Wir machen</h2>
          <h2 className={styles['custom-h2']}>es möglich!</h2>
          <p className={styles['custom-p2']}>
            Strategie, Analyse und Umsetzung:<br />
            Entdecken Sie, wie unser umfassendes Social Media Management<br />
            Ihre Socialmediapräsenz nach vorne bringt!
          </p>
        </div>
        <div className={styles.imageContainer}>
          <img src="/heroSection.png" width="270" height="270" />
        </div>
      </div>
    </div>
  );
}

