import React from "react";
import bgImage from "./../../assets/images/sectionBg.png";
import Bg from "./../../assets/images/bg.png";
import { Container, Button, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Service from "./../service/Service.js";
import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";
import useServices from "../../hooks/useServices.js";

const Home = () => {
  const history = useHistory();
  const [Services] = useServices();
  const featureServices = Services.slice(0, 6);
  function GoServices() {
    history.push("/Services");
  }

  return (
    <div>
      <div
        style={{
          background: `url(${Bg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <Container>
          <div
            style={{ height: "90vh" }}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="text-center my-5 py-5">
              <Bounce left cascade>
                <h1 className="text-white">Our Speciality</h1>
              </Bounce>

              <Bounce right cascade>
                <p className="my-4 text-black fs-5">
                <h5><b>Instant video consultation from the best designations</b></h5>
                </p>
              </Bounce>

              <Bounce>
                <Button
                  onClick={GoServices}
                  className="rounded-pill fs-5 py-2 px-4"
                  variant="primary"
                >
                  Our Services
                </Button>
              </Bounce>
            </div>
          </div>
        </Container>
      </div>
      <div
        style={{ background: `url(${bgImage})`, backgroundAttachment: "fixed" }}
      >
        <Container className="py-5">
          <Slide left>
            <h2 className="text-center text-white mb-2">Top Rated Services</h2>
          </Slide>
          <Slide right>
            <p className="text-muted text-center">
              “Access hundreds of certified and trusted designations and specialists at anytime from anywhere”
            </p>
          </Slide>
          <Row>
            {featureServices?.map((service) => (
              <Service service={service} key={service.key}></Service>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
