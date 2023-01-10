import Carousel from "react-bootstrap/Carousel";
import "./slide.css";
import { motion } from "framer-motion";

function OtherSlider() {
  return (
    <div className="banner">
      <div
        id="jumbotron"
        className="p-5 rounded-08 shadow border-0 text-white d-flex justify-content-between rounded"
        style={{ height: "250px", marginTop: "80px" }}
      >
        <div id="text">
          <h1 style={{ fontSize: "2rem" }}></h1>
          <h2>Other Section</h2>
        </div>
        <div className="dark-overlay">
          <img
            id="img-jumbotron"
            className="mt-5"
            style={{width:'18rem'}}
            src="https://user-images.githubusercontent.com/80618060/211273917-7153b79b-0099-4815-b307-08ff313fd015.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default OtherSlider;
