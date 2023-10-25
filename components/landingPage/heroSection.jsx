import React, { useState } from 'react';

export default function HeroSection() {

  return (
<div style={{ display: 'flex' }}>
  <div id="abteilung1" style={{ flex: 1 }}>
    <h2>Abteilung 1</h2>
    <p>Dies ist der Inhalt der ersten Abteilung.</p>
  </div>
  <div id="abteilung2" style={{ flex: 1 }}>
    <h2>Abteilung 2</h2>
    <p>Dies ist der Inhalt der zweiten Abteilung.</p>
  </div>
</div>
  );her
}