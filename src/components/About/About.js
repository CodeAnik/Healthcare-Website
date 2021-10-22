import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import sectionBg from "./../../assets/images/sectionBg.png";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
const About = () => {
  return (
    <div
      style={{ background: `url(${sectionBg})`, backgroundAttachment: "fixed" }}
      className="py-5"
    >
      <Container>
        <Zoom>
          <h2 className="text-center text-white mb-4">
            WELCOME TO Online Medical service
          </h2>
        </Zoom>
        <Row>
          <Col md className="pe-3">
            <Bounce bottom>
              <h5 className="text-white">About Us</h5>
              <p className="text-muted">
                "DocTime is an online medical service targeting emerging markets that are rapidly digitising. Our mission is to improve the health and wellbeing of the populations we serve. We have developed accessible and affordable telehealth services that aims to support the public health system, research and clinical trials.DocTime offers on-demand GP and specialist consultations with verified and certified designations, online prescriptions, medicine delivery, pathology/ diagnostics tests, all while building valuable Electronic Health Records.
                DocTime is vertically integrated with pharmacies/ medicine delivery suppliers, labs/ diagnostics centres, and payment providers for an end-to-end digital health experience.
                DocTime systematically focuses on expanding access to affordable healthcare services to all. We promise to improve our solutions continuously through our scalable technology and data analytics capabilities. Our passionate team is committed to excellence and work extremely hard to ensure we make a positive contribution to the healthcare of the future."
              </p>
              <p className="text-muted">
              Sometimes it’s helpful to see a specialist when you want. And get educational advice, pre- screening, monitoring and follow-ups. For maternal and infant health care, chronic diseases such as diabetes, or other conditions, DocTime can help you to connect with the right specialist designation and to stay healthy. More than 20 different specialities are available on DocTime.
              </p>
            </Bounce>
          </Col>
          <Col md className="pe-3">
            <Bounce bottom>
              <h5 className="text-white">Our Vision</h5>
              <p className="text-muted">
              Every designations on DocTime platform are BMDC certified. We verify relevant information before the designation can consult any patient.
              Most of our consultations starts within 10 minutes of making payment. The video call is secured by 256 bit encryption.
              As soon as the consultation is complete, designation will provide the electronic prescription for the patient to download instantly or later.
              Our designations are committed to provide the best service by spending enough time required for the consultation. We constantly improve our service from the rating and feedback provided by patients.
              </p>
              <h5 className="text-white">Our Mission</h5>
              <p className="text-muted">
              Are you a <b>qualified designation?</b>
              Join the forefront of digital healthcare
              Join DocTime network and create your virtual chamber provide medical consultancy via video call and expand the reach of your service.
              </p>
            </Bounce>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col md>
            <Bounce bottom>
              <h5 className="text-white">Sign up for our monthly newsletter</h5>
              <p className="text-muted">
                Be the first to know about news and updates.We never share you
                mail with others. Trust us!
              </p>
            </Bounce>
          </Col>
          <Col md className="d-flex align-items-center">
            <Bounce bottom>
              <Form className="w-100">
                <Form.Label className="text-white">
                  Leave your mail below
                </Form.Label>
                <Form.Group
                  className="d-flex text-white"
                  controlId="formBasicEmail"
                >
                  <Form.Control
                    style={{ background: "transparent", color: "white" }}
                    className="py-2 rounded-0"
                    type="email"
                    placeholder="Enter email"
                  />
                  <button
                    style={{ width: "120px" }}
                    className="btn rounded-0 btn-primary"
                  >
                    SIGN UP
                  </button>
                </Form.Group>
              </Form>
            </Bounce>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
