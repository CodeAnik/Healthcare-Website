import React from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import Rating from "react-rating";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Zoom from "react-reveal/Zoom";
import useAuth from "../../hooks/useAuth.js";
import { NavLink } from "react-router-dom";

library.add(fullStar, emptyStar);

function Service(props) {
  const { key, img, title, specialist, Fees, rating, ratingCount } = props.service;
  const { addToCart } = useAuth();
  return (
    <Col className="my-3" md={4}>
      <Zoom>
        <Card style={{ minHeight: "480px" }}>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text className="text-muted">{specialist}</Card.Text>
            <p>
              {" "}
              <b>Fees: {Fees}$</b>
            </p>
            <div className="mb-3">
              <Row>
                <Col>
                  <span class="text-danger"><b>Rating: {rating}</b></span>
                </Col>
                <Col>Total Review: {ratingCount}</Col>
              </Row>
            </div>
            <div className="d-flex">
              <NavLink to={`/services/${key}`} className="w-50 btn btn-primary">
                Details
              </NavLink>
              <Button
                onClick={() => addToCart(key)}
                className="w-50 ms-1"
                variant="primary"
              >
                Book Now
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Zoom>
    </Col>
  );
}

export default Service;
