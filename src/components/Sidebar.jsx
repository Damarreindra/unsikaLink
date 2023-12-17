import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarDataMain } from "./SidebarDataMain";
import { SidebarDataSetting } from "./SidebarDataSetting";
import Dropdown from "react-bootstrap/Dropdown";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";

import "./Sidebar.css";
import AddPost from "./AddPost";

function Sidebar() {
  const [sidebar, setSidebar] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in.
        setUser(user);
      } else {
        // No user is signed in.
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);


  return (
    <>
      <nav style={{ marginLeft: "179px" }} className="nav-menu active p-3">
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <img
              src="/images/unsika_logo.png"
              style={{ width: "40px", verticalAlign: "middle" }}
              alt=""
              srcSet=""
            />
            <h2 style={{ display: "inline-block", marginLeft: "10px" }}>
              UnsikaLink
            </h2>

            <Link to="#" className="menu-bars" style={{ display: "none" }}>
              <AiIcons.AiOutlineClose />
            </Link>
          </li>

          <div className="container border rounded-pill mb-4 p-3">
            {user && (
             <div style={{ display: 'flex', alignItems: 'center' }}>
             <img
               src={user.photoURL}
               alt="Profile"
               style={{
                 width: "40px",
                 height: "40px",
                 borderRadius: "50%",
                 border: "0.2px solid #d9d9d9",
                 marginRight: "10px", // Add margin for spacing
               }}
             />
             <div>
               <h5>{user.displayName}</h5>
             </div>
           </div>
           
            )}
          </div>

          <small className="text-muted">MAIN</small>
          {SidebarDataMain.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? "text-info" : "text-dark"
                  }
                >
                  {item.icon}
                  <span>{item.title}</span>
                </NavLink>
              </li>
            );
          })}

          <small className="text-muted">SETTING</small>
          {SidebarDataSetting.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? "text-info" : "text-dark"
                  }
                >
                  {item.icon}
                  <span>{item.title}</span>
                </NavLink>
              </li>
            );
          })}

          <li id="add-post-btn">
            <AddPost />
          </li>
          {/* <li>
            <Dropdown>
              <Dropdown.Toggle
                id="btn-logout"
                className="text-dark"
                style={{ textDecoration: "none" }}
              >
                <img id="profile-img" src={user?.photoURL} alt="" />
                <h2 id="profile-uname">{user?.displayName}</h2>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  href="/login"
                  onClick={() => {
                    // Implement your logout logic
                  }}
                >
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li> */}
        </ul>
      </nav>
    </>
  );
}

export default Sidebar;
