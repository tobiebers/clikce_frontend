import React, { useState } from 'react';
import {Col, Row} from "react-bootstrap";
import SettingProfilLeftColumn from "@/components/setting-profil/SettingProfilLeftColumn";
import SettingProfilRightColumn from "@/components/setting-profil/SettingProfilRightColumn";

export default function SettingProfil() {
  return (
    <div>
      <Row>
        <Col md={5} className="background-color-secondary">
          <SettingProfilLeftColumn />
        </Col>
        <Col md={7} className="background-color-primary">
          <SettingProfilRightColumn />
        </Col>
      </Row>
    </div>
  );
}