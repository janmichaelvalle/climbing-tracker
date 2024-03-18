import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import "./ClimbingRoutesCard.css";
import onePieImage from "../images/1pie.png";
import twoPieImage from "../images/2pie.png";
import threePieImage from "../images/3pie.png";
import fourPieImage from "../images/4pie.png";
import fivePieImage from "../images/5pie.png";
import sixPieImage from "../images/6pie.png";

const ClimbingRoutesCard = ({ route }) => {
  const { grade, color, location, created_at } = route;

  // Function to get the appropriate image based on the grade
  const getImageForGrade = () => {
    switch (grade) {
      case "1pie":
        return onePieImage;
      case "2pie":
        return twoPieImage;
      case "3pie":
        return threePieImage;
      case "4pie":
        return fourPieImage;
      case "5pie":
        return fivePieImage;
      case "6pie":
        return sixPieImage;
      default:
        // If grade is not recognized, return a default image or handle the case accordingly
        return null;
    }
  };

  // Function to format the created_at date
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "2-digit" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <Card className="route-card m-1" >
      <Row>
      <Col xs={4} className="d-flex justify-content-center align-items-center" style={{ backgroundColor: route.color }}>
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "50%",
              overflow: "hidden",
              
              
            }}
          >
            <Card.Img src={getImageForGrade()} alt={`Pie for grade ${grade}`} />
          </div>
        </Col>
        <Col xs={8}>
          <Card.Body>
            <Card.Text>
              <strong>Location:</strong> {location}<br />
              <strong>Created date:</strong> {formatDate(created_at)}
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default ClimbingRoutesCard;
