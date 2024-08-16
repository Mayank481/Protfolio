import React, { useState } from "react";
import "./Contact.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_REGISTER } from "../config";

export const Contact = () => {
  const [inputValue, setInputValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
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
  const sentUserData = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, phoneNumber, message } = inputValue;
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      phoneNumber === "" ||
      message === ""
    ) {
      toast.error("Please fill all the fields");
    } else {
      const res = await fetch(`${API_REGISTER}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phoneNumber,
          message,
        }),
      });
      const data = await res.json();
      console.log(data);
      if (data) {
        toast.success("Data sent successfully");
        setInputValue({
          ...inputValue,
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          message: "",
        });
      } else {
        toast.error("Failed to sent the Data");
      }
    }
  };
  return (
    <>
      <div className="container mb-3 contact">
        <h2 className="text-center">Contact Us</h2>
        <div className="container mt-2">
          <Form className="row mt-2">
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicemail">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" value={inputValue.firstName} onChange={getValue} name="firstName" />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicemail">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text"value={inputValue.lastName} onChange={getValue} name="lastName" />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicemail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email"value={inputValue.email} onChange={getValue} name="email" />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicemail">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
               value={inputValue.phoneNumber} onChange={getValue}
                name="phoneNumber"
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
               value={inputValue.message} onChange={getValue}
                name="message"
              />
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Button
                variant="primary"
                className="col-lg-6"
                type="submit"
                onClick={sentUserData}
              >
                Submit
              </Button>
            </div>
          </Form>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};
