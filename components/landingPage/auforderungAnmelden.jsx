import React from 'react';
import { Container, Button } from 'react-bootstrap';

export default function RegistrationComponent() {
  return (
    <div
      style={{
        background: 'white',
        borderRadius: '10px', // Radius anpassen, wie gewünscht
        padding: '20px',
        position: 'relative',
      }}
    >
      <h1 className="text-right" style={{ position: 'relative', zIndex: 1 }}>
        Melde dich jetzt an!
      </h1>
      <p className="text-right" style={{ position: 'relative', zIndex: 1 }}>
        Entdecken Sie jetzt, wie unser umfassendes Social Media Management<br />Ihre Socialmediapräsenz nach vorne bringt
      </p>
      <Button
        variant="dark"
        className="float-right"
        style={{ position: 'relative', zIndex: 1 }}
      >
        Register
      </Button>

      <img
        src="Login-pana.png"
        alt="Bild"
        style={{
          position: 'absolute',
          right: '0',
          top: '-20px', // Anpassen, um 20px über den oberen Rand hinauszuragen
          width: 'auto',
          height: 'calc(160% + 40px)', // Erhöht die Höhe um 40px und ragt oben 20px über den Rand
          zIndex: 0, // Setzt den Stapelwert auf 0, um das Bild über dem Text und dem Button zu legen
        }}
      />
    </div>
  );
}
