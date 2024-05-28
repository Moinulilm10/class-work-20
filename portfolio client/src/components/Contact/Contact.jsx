import { Col, Container, Row } from "react-bootstrap";
// import "../../styles/Contact.css";
import Particle from "../Particle";
import AboutMe from "./AboutMe";

// import contactMe from "../../assets/contact_me.png";

const Contact = () => {
  return (
    <Container fluid className="contact-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1
              style={{
                fontSize: "2.1em",
                paddingBottom: "20px",
                // marginLeft: "4.5rem",
              }}
            >
              Contact <strong className="purple">Me</strong>
            </h1>
            <AboutMe />
          </Col>
          {/* contact image */}
          {/* <Col
            md={5}
            style={{ paddingTop: "40px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img
              src={contactMe}
              alt="about"
              className="hidden img-fluid lg:block"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
};

export default Contact;
