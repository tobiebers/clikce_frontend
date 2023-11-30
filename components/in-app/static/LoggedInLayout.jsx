// LoggedInLayout.js
import VerticalNavigation from "@/components/in-app/static/VerticalNavigation";
import Footer from "@/components/out-app/static-components/Footer";
import { Container, Row, Col } from 'react-bootstrap';

export default function LoggedInLayout({ children }) {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={3}>
          <VerticalNavigation />
        </Col>
        <Col xs={12} md={9}>
          <div className="main-content">
            {children}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
