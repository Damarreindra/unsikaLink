import React from 'react'
import { Link } from 'react-router-dom'

function NavbarAdmin() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
  <div className="container-fluid">
    <Link className="navbar-brand" to={"/"}>  
    <img src="https://aseanyouthforum.org/wp-content/uploads/2019/03/cropped-Logo-Asean-Youth-Forum-HR-01.png" alt="" width="40" height="40" class="d-inline-block align-text-top"/>ASEAN YOUTH FORUM</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={"/homepageadmin"}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to={"/aboutpageadmin"}>About</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link active dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Admin
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to={"/login"}>Logout</Link></li>
          </ul>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavbarAdmin