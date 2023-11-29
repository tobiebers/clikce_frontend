import React from "react";
import { Col } from "react-bootstrap";

export default function RegisterLeftCol() {
  return (

      <div>
        <img className="img-size-logologin mt-0" src="logo.png" alt="Logo" />
        <div className="img-size-googleandfacebook-container">
          <img className="img-size-googleandfacebook" src="facebook.png" alt="Facebook" />
          <img className="img-size-googleandfacebook" src="google.png" alt="Google" />
        </div>
        <img className="img-size-or mx-auto" src="or.png" alt="Or" />
      </div>

  );
}
