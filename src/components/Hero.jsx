import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div>
      <section
        id="hero"
        className="min-vh-100 d-flex align-items-center text-start"
        style={{color:'#051334'}}
      >
        <div className="container">
          <div className="row">
            <div className="col-12"
            >
              <h1
                style={{ fontSize: "4rem", color:'#051334' }}
                className="fw-bolder "
                
              >
                Bagikan Tentang Karir Disini
              </h1>
              <h5
                style={{ fontSize: "2rem", color:'#051334' }}
                className="fw-bolder text-center"
              >
                Go further with us!
              </h5>
              <div className="container mt-5 d-flex justify-content-center"  >
                <Link style={{background:'#051334'}} className="btn btn-success" to={"/register"} role="button">
                  Register Now
                </Link>
              </div>
            </div>
            
          </div>
          
        </div>
       
        
        <div className="container mt-5" id="hero-img">
        <div className="row">
              <div className="col mt-5">
            <div className="card rounded-08 shadow border-0 p-2">
              <img
                src="https://images.pexels.com/photos/1015568/pexels-photo-1015568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                className="card-img"
                
                alt="..."
              />
              <div class="card-body">
               Share good things
              </div>
            </div>
          </div>
          </div>

          <div className="row">
          <div className="col">
            <div className="card rounded-08 shadow border-0 p-2">
              <img
                src="https://images.pexels.com/photos/6147076/pexels-photo-6147076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                className="card-img"
                alt="..."
              />
              <div class="card-body">
                Discussing about hot topics
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card rounded-08 shadow border-0 p-2">
              <img src="https://images.pexels.com/photos/2274162/pexels-photo-2274162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                className="card-img"
                alt="..."
              />
              <div class="card-body">
                Help each other
              </div>
            </div>
          </div>
          </div>

          </div>
      </section>
    </div>
  );
}

export default Hero;
