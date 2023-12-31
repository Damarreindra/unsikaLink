// Home.js

import React, { useEffect, Profiler } from "react";
import { Cards } from "../components";
import NavbarUser from "../components/NavbarUser";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getListUser, updatePublish, unPublish } from "../actions/userAction";
import { formatDistance, subDays } from "date-fns";
import BorderExample from "../components/Spinner";
import { motion } from "framer-motion";
import { Link, Outlet } from "react-router-dom";
import Button from "react-bootstrap/Button";
import RightBar from "../components/RightBar/RightBar";
import Sidebar from "../components/Sidebar";

function Home() {
  const getToken = localStorage.getItem("USER_ID");
  if (getToken === null) {
    window.location = "/login";
  }
  
  
  return (
    <>
    
 
 
      <Container fluid>
        <Row>
          <Col md={3}>
            {/* Left Sidebar */}
            <Sidebar />
          </Col>
          <Col md={6}>
          
            <Cards />
          </Col>
          <Col md={3}>
            {/* Right Sidebar */}
            <RightBar/>
          </Col>
        </Row>
        <Outlet />
      </Container>
    
    </>
  );
}

export default Home;
