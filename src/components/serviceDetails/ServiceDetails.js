import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Row } from "react-bootstrap";
import Rating from "react-rating";
import { useParams } from "react-router-dom";
import useServices from "../../hooks/useServices.js";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import useAuth from "../../hooks/useAuth.js";

const ServiceDetails = () => {
  const [services] = useServices();
  const { addToCart } = useAuth();
  console.log(services);
  const { id } = useParams();
  const newSelected = services?.find((services) => services.key === Number(id));

  return (
    <div className="my-5">
      <Row>
        <Col>
          <img width="100%" src={newSelected?.img} alt="" />
        </Col>
        <Col className="p-3">
          <h1>{newSelected?.title}</h1>
          <h3><b>Specialist in </b>{newSelected?.specialist}</h3>
          <h5>{newSelected?.designation}</h5>
          <Col className="p-3">
            <Row>
              <Col>
                <h1>Fees: {newSelected?.Fees}$</h1>

                <div>
                  <Rating
                    readonly
                    style={{ color: "Red" }}
                    initialRating={newSelected?.rating}
                    emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
                    fullSymbol={<FontAwesomeIcon icon={fullStar} />}
                  />{" "}
                  {newSelected?.rating}
                  <div>Total Review: {newSelected?.ratingCount}</div>
                </div>

                <div className="d-flex">
                  <button
                    onClick={() => addToCart(newSelected?.key)}
                    className="w-50 ms-1 mt-3 btn btn-primary"
                  >
                    Book Now
                  </button>
                </div>
              </Col>
            </Row>
          </Col>
        </Col>
      </Row>
    </div>
  );
};
export default ServiceDetails;
