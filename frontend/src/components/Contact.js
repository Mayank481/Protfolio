import React, { useState } from "react";
import "./Contact.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const Contact = () => {
  const [inputValue, setInputValue] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    PhoneNumber: "",
    Message: "",
  });

  const getValue = (e) => {
    const { name, value } = e.target;
    setInputValue(() => {
      return {
        ...inputValue,
        [name]: value,
      };
    });
  };
  return (
    <>
      <div className="container mb-3 contact">
        <h2 className="text-center">Contact Us</h2>
        <div className="container mt-2">
          <Form className="row mt-2">
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" onChange={getValue} name="FirstName" />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" onChange={getValue} name="LastName" />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" onChange={getValue} name="Email" />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                onChange={getValue}
                name="PhoneNumber"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                onChange={getValue}
                name="Message"
              />
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Button variant="primary" className="col-lg-6" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};
