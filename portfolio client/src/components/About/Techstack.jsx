import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiGit,
  DiJavascript1,
  DiMongodb,
  DiNodejs,
  DiPython,
  DiReact,
} from "react-icons/di";
import { SiFirebase, SiNextdotjs, SiPostgresql } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus className="single-icons" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 className="single-icons" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs className="single-icons" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact className="single-icons" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb className="single-icons" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs className="single-icons" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit className="single-icons" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase className="single-icons" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql className="single-icons" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython className="single-icons" />
      </Col>
    </Row>
  );
}

export default Techstack;
