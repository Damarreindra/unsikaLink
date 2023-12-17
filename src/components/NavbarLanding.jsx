import React from 'react';
import { Link } from 'react-router-dom';

function NavbarLanding() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-white shadow border-0">
        <div className="container-fluid">
          <Link className="navbar-brand text-success" to={"/home"}>
            <div className="d-flex align-items-center">
              <img src="/images/unsika_logo.png" style={{ width: '40px' }} alt="" />
              <h2 style={{ color: '#051334', marginLeft: '10px', marginBottom: '0' }}>UnsikaLink</h2>
            </div>
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* Add any additional navigation items if needed */}
            </ul>
            <form className="d-flex">
              <Link className="sign-in" to={"/login"} style={{ marginTop: "10px"  }}>
                <button  style={{background:'#051334'}} type="button" className="btn btn-outline-light" data-toggle="button" aria-pressed="false" autoComplete="off">
                  Sign-in
                </button>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavbarLanding;
