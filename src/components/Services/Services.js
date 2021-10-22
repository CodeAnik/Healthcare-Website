import React from "react";
import { Container, Row } from "react-bootstrap";
import Service from "../service/Service.js";
import bgImage from "./../../assets/images/sectionBg.png";
import Zoom from "react-reveal/Zoom";
import useServices from "../../hooks/useServices.js";

const Services = () => {
  const [services] = useServices();
  return (
    <div
      style={{ background: `url(${bgImage})`, backgroundAttachment: "fixed" }}
    >
      <Container className="py-5">
        <Zoom right cascade>
          <h2 className="text-center text-white mb-0">Our All Services</h2>
        </Zoom>
        <Zoom left cascade>
          <p className="my-4 mt-2 text-center text-muted fs-5">
          DocTime is an online medical service app where patients can get 24/7 video consultation from designations. DocTime uses 256 bit encryption to secure the video consultation. Patient can keep their previous consultation history and view online prescriptions.
          </p>
        </Zoom>
        <Row>
          {services?.map((service) => (
            <Service service={service} key={service.key}></Service>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
