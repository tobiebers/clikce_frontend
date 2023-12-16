import AccountCard from "@/components/in-app/account/account-management/AccountCard";
import PostWindow from "@/components/in-app/calendar/post-modal/post-window";
import Calendar1 from "@/components/in-app/calendar/Calendar1";
import {Col, Row} from "react-bootstrap";

export default function Calendar() {


  return (
    <div>
      <PostWindow/>
      <Row>
        <Col md={2}>
          {/* Hier kommt der Inhalt der linken, schmalen Spalte */}
        </Col>
        <Col md={10}>
          <Calendar1/>
        </Col>
      </Row>
    </div>
  );
}