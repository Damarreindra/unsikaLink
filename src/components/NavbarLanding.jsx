import React from 'react'
import { Link } from 'react-router-dom'

function NavbarLanding() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-white shadow border-0">
  <div className="container-fluid">
    <Link className="navbar-brand text-success" to={"/home"}>  
    <img src="https://aseanyouthforum.org/wp-content/uploads/2019/03/cropped-Logo-Asean-Youth-Forum-HR-01.png" alt="" width="40" height="40" className="d-inline-block align-text-top"/>ASEAN YOUTH FORUM</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link text-success" aria-current="page" to={"/home"}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-success" to={"/aboutpagelanding"}>About</Link>
        </li>
      </ul>
      <form class="d-flex">
      <Link className="sign-in" to={"/login"} style={{marginTop:"10px"}}> <button type="button" class="btn btn-outline-success" data-toggle="button" aria-pressed="false" autocomplete="off">
            Sign-in </button></Link>
        </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavbarLanding