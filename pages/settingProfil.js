import React, { useState } from 'react';
import {Col, Row} from "react-bootstrap";
import SettingProfilLeftColumn from "@/components/setting-profil/SettingProfilLeftColumn";
import SettingProfilRightColumn from "@/components/setting-profil/SettingProfilRightColumn";

export default function SettingProfil() {
  return (
    <div>
      <Row className="min-vh-80 align-items-center">
        <Col md={5} className="d-flex justify-content-center">
          <SettingProfilLeftColumn />
        </Col>
        <Col md={7}>
          <SettingProfilRightColumn />
        </Col>
      </Row>
    </div>
  );
}