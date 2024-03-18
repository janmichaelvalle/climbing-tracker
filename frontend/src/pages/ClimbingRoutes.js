import React, { useEffect, useState } from "react";
import ClimbingRoutesCard from "../components/ClimbingRoutesCard";
import GradeFilter from "../components/GradeFilter"; // Import the filter component
import { Row, Col } from "react-bootstrap";

const ClimbingRoutes = () => {
  const [routes, setRoutes] = useState([]);
  const [selectedGrade, setSelectedGrade] = useState('');

  useEffect(() => {
    fetch("http://localhost:4000/routes/")
      .then((res) => res.json())
      .then((data) => {
        // console.log('Fetched routes:', data);
        setRoutes(data.allRoutes);
      })
      .catch((error) => console.error("Error fetching routes:", error));
  }, []);

  // Extract unique grades from routes
  const grades = [...new Set(routes.map((route) => route.grade))];

  // Filter routes based on selected grade
  const filteredRoutes = selectedGrade
    ? routes.filter((route) => route.grade === selectedGrade)
    : routes;

  return (
    <div>
      <h2>Climbing Routes</h2>
      <GradeFilter
        grades={grades}
        selectedGrade={selectedGrade}
        onSelectGrade={setSelectedGrade}
      />
      <Row>
        {filteredRoutes.map((route) => (
          <Col md={4} key={route._id}>
            {/* Each ClimbingRoutesCard component receives the route object as a prop named route */}
            <ClimbingRoutesCard route={route} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ClimbingRoutes;
