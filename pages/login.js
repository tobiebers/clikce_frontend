import React, { useState } from 'react';
import LoginRightColumn from "@/components/login-page/LoginRightColumn";
import LoginForm from "@/components/login-page/LoginForm";
import {Col, Row} from "react-bootstrap";


export default function Login() {
  return (
    <div>
      <Row className="min-vh-80 align-items-center">
        <Col md={5} className="d-flex justify-content-center">
          <LoginForm />
        </Col>
        <Col md={7}>
          <LoginRightColumn />
        </Col>
      </Row>
    </div>
  );
}