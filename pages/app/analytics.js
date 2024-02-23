import React from 'react';
import ButtonGroup from "@/components/in-app/analytics/ButtonGroup";
import LikesLineChart from "@/components/in-app/analytics/LikesLineChart";
import FollowerGainLineChart from "@/components/in-app/analytics/FollowerGainLineChart";
import CurrentAccountUsed from "@/components/in-app/analytics/CurrentAccountUsed";
import FlipCard from "@/components/in-app/analytics/TopPerformingPosts";
import Lists from "@/components/in-app/analytics/Lists";
import { Col, Row, Container } from "react-bootstrap";

export default function Analytics() {
    return (
        <Container className="my-2 mx-2">
            <Row className="g-2">
                <Col md="auto" className="p-3">
                    <div className="mb-5">
                        <CurrentAccountUsed/>
                    </div>
                    <dic calssName="mt-3">
                        <ButtonGroup/>
                    </dic>
                </Col>
                <Col md="auto" className="p-3">
                    <div className="mb-5">
                        <LikesLineChart/>
                    </div>
                    <FollowerGainLineChart/>
                </Col>
                <Col md="auto" className="p-3">
                    <div className="mb-5">
                        <FlipCard/>
                    </div>
                    <div className="mt-5">
                        <Lists/>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
