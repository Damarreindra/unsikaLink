import React from 'react'
import { Link } from 'react-router-dom'

function NavbarLanding() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-white shadow border-0">
  <div className="container-fluid">
    <Link className="navbar-brand text-success" to={"/home"}>  
    <img src="https://user-images.githubusercontent.com/80618060/209421785-aa078881-83eb-41e3-ae28-9b05ee0d5dc0.png" style={{width:'40px'}} alt="" srcset="" />
         
   </Link>
   <h2 className='text-success'>Tweeder</h2>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      
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