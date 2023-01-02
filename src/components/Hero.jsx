import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div>
        <section id="hero" className="min-vh-100 d-flex align-items-center text-start">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1 className="fw-bolder text-white">ASEAN YOUTH FORUM</h1>
                <h6 className="text-md-start text-white">Kami berdedikasi untuk membantu para pemuda di asean menyuarakan pendapat </h6>
                <h6 className="text-md-start text-white">dan tempat berbagi informasi seputer kepemudaan di seluruh negara yang tergabung dalam ASEAN.</h6>
                <p className="text-md-start text-white">Ayo jadilah bagian dari kami!</p>
                <div>
                <Link class="btn btn-success" to={"/register"} role="button">Register Now</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Hero