import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AccountCard from "@/components/in-app/account/account-management/AccountCard";
import AddAccount from "@/components/in-app/account/account-management/AddAccount";
import AccountManagementRight from "@/components/in-app/account/account-management/AccountManagementRight";

export default function AccountManagement() {
  return (
    <Container>
      <Row>
        <Col md={4}>
          <AddAccount/>
          <AccountCard/>
        </Col>

        <Col md={8}>
          <AccountManagementRight/>
        </Col>
      </Row>
    </Container>
  );
}
