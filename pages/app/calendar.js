import AccountCard from "@/components/in-app/account/account-management/AccountCard";
import PostWindow from "@/components/in-app/calendar/post-modal/post-window";
import Calendar1 from "@/components/in-app/calendar/Calendar1";
import PostPlannerModal from "@/components/in-app/bot/PostsPlanner";
import CreateBot from "@/components/in-app/calendar/post-modal/CreateBot";
import HashtagSetCreator from "@/components/in-app/calendar/post-modal/HashtagSetCreator";
import HashtagSetSelector from "@/components/in-app/calendar/post-modal/HashtagSetViewer";
import {Col, Row} from "react-bootstrap";

export default function Calendar() {


  return (
    <div>

      <Row className="mt-5">
        <Col md={2}>

          <PostWindow/>
          <PostPlannerModal/>
          <CreateBot/>
          <HashtagSetCreator/>

        </Col>
        <Col md={10}>
          <Calendar1/>
        </Col>
      </Row>
    </div>
  );
}