import React from 'react';
import { Row, Col } from 'react-bootstrap';
import CardsInfo from "@/components/in-app/dashboard/CardsInfo";
import Chart from "@/components/in-app/dashboard/Chart";
import PerformingAccounts from "@/components/in-app/dashboard/PerformingAccounts";
import RecentInteractions from "@/components/in-app/dashboard/RecentInteractions";

export default function Dashboard() {
  return (
    <div>
      {/* Row für CardsInfo */}
      <Row className="mb-3">
        <Col>
          <CardsInfo />
        </Col>
      </Row>

      {/* Row für Chart */}
      <Row className="mb-3">
        <Col>
          <Chart />
        </Col>
      </Row>

      {/* Row für RecentInteractions und PerformingAccounts */}
      <Row>
        {/* Halbe Breite (6 Spalten) für RecentInteractions */}
        <Col md={6} className="mb-3">
          <RecentInteractions />
        </Col>

        {/* Halbe Breite (6 Spalten) für PerformingAccounts */}
        <Col md={6}>
          <PerformingAccounts />
        </Col>
      </Row>
    </div>
  );
}
