import React, { useState } from 'react';
import BoxContainer from "@/components/designSite/Container";
import Row from 'react-bootstrap/Row';
import ToggleButton from "@/components/designSite/ToggleButton";

export default function DesignSite() {

  return (
    <div>
      <Row>
        <ToggleButton/>
      </Row>

      <Row>
        <BoxContainer/>
      </Row>
    </div>
  );
}
