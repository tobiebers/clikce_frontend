import React, { useState } from 'react';
import RegisterRightCol from "@/components/Register/RegisterRightCol";
import RegisterLeftCol from "@/components/Register/RegisterLeftCol";
import RegisterForm from "@/components/Register/RegisterForm";
import {Col, Row} from "react-bootstrap";

export default function register() {
  return (
    <div>
      <Row>
        <Col md={5}>
          <RegisterLeftCol/>
          <RegisterForm/>
        </Col>
        <Col md={7}>
          <RegisterRightCol />
        </Col>
      </Row>
    </div>
  );
}