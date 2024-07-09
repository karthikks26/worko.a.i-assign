import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./components/Auth/Login";
import Home from "./components/Candidate/Home";
import RD from "./components/RD";
import PNF from "./components/PNF";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/candidate/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="/" element={<RD />} />
        <Route path="*" element={<PNF />} />
      </Routes>
    </Router>
  );
}

const PrivateRoute = ({ children }) => {
  const authToken = localStorage.getItem("authToken");
  return authToken ? children : <Navigate to="/login" replace />;
};

export default App;
