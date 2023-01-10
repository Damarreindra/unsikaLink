import Carousel from "react-bootstrap/Carousel";
import "./slide.css";
import { motion } from "framer-motion";

function UncontrolledExample() {
  const uname = localStorage.getItem("uname");

  return (
    <div className="banner">
      <div
        id="jumbotron"
        className="p-5 rounded-08 shadow border-0 text-white d-flex justify-content-between rounded"
        style={{ height: "250px", marginTop: "80px" }}
      >
       <div id="text">
        <h1 style={{fontSize:'2rem'}}>Hi, {uname}</h1>
        <h2>Welcome to Tweeder</h2>
      </div>
      <div className="dark-overlay">
        <img
          id="img-jumbotron"
          className="mt-4"
          src="https://user-images.githubusercontent.com/80618060/209114883-ed44bbe0-ba87-414b-8997-e2fbef00b26d.png"
          alt=""
        />
      </div>
      </div>
    </div>
  );
}

export default UncontrolledExample;
