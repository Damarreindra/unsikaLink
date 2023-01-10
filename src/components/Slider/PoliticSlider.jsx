import Carousel from "react-bootstrap/Carousel";
import "./slide.css";
import { motion } from "framer-motion";

function PoliticSlider() {
  return (
    <div className="banner">
      <div
        id="jumbotron"
        className="p-5 rounded-08 shadow border-0 text-white d-flex justify-content-between rounded"
        style={{ height: "250px", marginTop: "80px" }}
      >
        <div id="text">
          <h1 style={{ fontSize: "2rem" }}></h1>
          <h2>Politic Section</h2>
        </div>
        <div className="dark-overlay">
          <img
            id="img-jumbotron"
            className="mt-2"
            src="https://user-images.githubusercontent.com/80618060/211273544-1e938397-8ed8-45db-ab44-dacecf1c3253.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default PoliticSlider;
