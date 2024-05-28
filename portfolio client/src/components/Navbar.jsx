import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {
  AiOutlineFundProjectionScreen,
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { MdOutlineWork } from "react-icons/md";
import { RiContactsLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import logo from "../assets/my-logo.png";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <Link to="/">
            <img src={logo} className="img-fluid logo" alt="brand" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="flex flex-col gap-2 ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome
                  className="mb-[-27px] md:mb-[2px] lg:mb-[2px]"
                  // style={{ marginBottom: "2px" }}
                />{" "}
                Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser
                  className="mb-[-27px] md:mb-[2px] lg:mb-[2px]"
                  // style={{ marginBottom: "2px" }}
                />{" "}
                About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/experience"
                onClick={() => updateExpanded(false)}
              >
                <MdOutlineWork
                  className="mb-[-27px] md:mb-[2px] lg:mb-[2px]"
                  // style={{ marginBottom: "2px" }}
                />{" "}
                Experience
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  className="mb-[-27px] md:mb-[2px] lg:mb-[2px]"
                  // style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                to="/contact"
                as={Link}
                onClick={() => updateExpanded(false)}
              >
                <RiContactsLine
                  className="mb-[-27px] md:mb-[2px] lg:mb-[2px]"
                  // style={{ marginBottom: "2px" }}
                />{" "}
                Contact
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument
                  className="mb-[-27px] md:mb-[2px] lg:mb-[2px]"
                  // style={{ marginBottom: "2px" }}
                />{" "}
                Resume
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
