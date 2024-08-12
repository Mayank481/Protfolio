import React from "react";
import "./Footer.css";

export const Footer = () => {
  const year = new Date().getUTCFullYear();
  return (
    <div className="footer">
      <div className="container footer_container d-flex justify-content-around flex-wrap">
        <div className="first mt-5">
          <h4>Mayank Jaggi</h4>
          <p>© {year} Mayank Jaggi All right reserved</p>
          <p className="d-flex">
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-facebook mx-3"></i>
            <i className="fa-brands fa-github"></i>
          </p>
        </div>
        <div className="second mt-5">
          <h4>Get in Touch</h4>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.</p>
          <p>jaggi.mayank19@gmail.com</p>
          <p>+91-8400547870</p>
        </div>
        <div className="third mt-5">
          <p>About</p>
          <p>Resume</p>
        </div>
      </div>
    </div>
  );
};
