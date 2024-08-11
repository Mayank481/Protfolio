import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const common = {
    marginRight: 15,
    fontSize: 17,
    letterSpacing: ".5px",
  };
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <div>
            <h2 className="mt-2 hr2_right" style={{ color: "#6c63ff" }}>
              <NavLink to="/" className="text-decoration-none">
                Mayank Jaggi
              </NavLink>
            </h2>
          </div>
          <Nav className="">
            <div className="mt-2 bg-body-tertiary" expand="lg">
              <NavLink to="/" className="text-decoration-none" style={common}>
                Home
              </NavLink>
              <NavLink
                to="/playlist"
                className="text-decoration-none"
                style={common}
              >
                Projects
              </NavLink>
              <NavLink
                to="/contact"
                className="text-decoration-none"
                style={common}
              >
                Contact
              </NavLink>
              <NavLink
                to="/about"
                className="text-decoration-none"
                style={common}
              >
                About
              </NavLink>
            </div>
            <div>
              <Button variant="danger">GitHub</Button>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
