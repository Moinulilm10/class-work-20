import { Col, Row } from "react-bootstrap";
import {
  SiPostman,
  SiSlack,
  SiVercel,
  SiVisualstudiocode,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode className="single-icons" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman className="single-icons" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack className="single-icons" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel className="single-icons" />
      </Col>
    </Row>
  );
}

export default Toolstack;
