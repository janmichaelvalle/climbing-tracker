import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";

import Home from "./pages/Home";
import AppNavbar from "./components/AppNavBar";
import ClimbingRoutes from "./pages/ClimbingRoutes";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { UserProvider } from "./UserContext";

function App() {
  // The initial state of the user is the id and isAdmin property is null.
  const [user, setUser] = useState({
    id: null,
    isAdmin: null,
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch(`http://localhost:4000/users/details`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("userDetails", data)
          if (data.user) {
            setUser({
              id: data.user._id,
              isAdmin: data.user.isAdmin,
            });
          } else {
            setUser({
              id: null,
              isAdmin: null,
            });
          }
        })
        .catch((error) => {
          console.error("Error fetching user details:", error);
          setUser({
            id: null,
            isAdmin: null,
          });
        });
    }
  }, []);

  return (
    <Router>
      <UserProvider value={{ user, setUser }}>
        <Container fluid className="website-container">
          <AppNavbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/routes" element={<ClimbingRoutes />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Container>
      </UserProvider>
    </Router>
  );
}

export default App;
