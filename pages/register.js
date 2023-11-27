import React, { useState } from 'react';
import RegisterRightCol from "@/components/register/RegisterRightCol";
import RegisterLeftCol from "@/components/register/RegisterLeftCol";
import RegisterForm from "@/components/register/RegisterForm";
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