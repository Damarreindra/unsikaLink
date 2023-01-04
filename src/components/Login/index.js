import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../actions/userAction";
import { json, Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import { parse } from "date-fns";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "GET",
      url: "https://63496bd50b382d796c86192b.mockapi.io/users",
      timeout: 120000,
    }).then((res) => {
      let users = res.data;
      let cekData = users.items.find(
        (x) => x.email === email && x.password === password
      );
      let token = users.requestId;
      if (cekData) {
        if (cekData.role === "admin") {
          let stringLS = JSON.stringify(cekData);
          let parsed = JSON.parse(stringLS);
          localStorage.setItem("id", parsed.id);
          localStorage.setItem("img", parsed.profile_img);
          localStorage.setItem("uname", parsed.username);

          window.location = "/admin";
        } else {
          let stringLS = JSON.stringify(cekData);
          let stringToken = JSON.stringify(token);
          let parsedToken = JSON.parse(stringToken);

          let parsed = JSON.parse(stringLS);

          localStorage.setItem("token", parsedToken);
          localStorage.setItem("id", parsed.id);
          localStorage.setItem("img", parsed.profile_img);
          localStorage.setItem("uname", parsed.username);
          window.location = "/home";
        }
      } else {
        alert("INCORRECT LOGIN CREDENTIALS");
      }
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mt-5 col-md-7">
        <div className="card mb-4">
          <div className="row g-0">
            <div className="col-md-6 d-none d-md-block">
              <img
                src="images/tangga.jpg"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-6 mx-auto">
              <div className="card-body text-center">
                <h2 className="card-title border-bottom mb-4 text-success">
                  Tweeder
                </h2>
                <h5 className="card-title mb-3">Login</h5>
                <form action="" onSubmit={(e) => handleSubmit(e)} id="form">
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      name="email"
                      id="email"
                      placeholder="name@example.com"
                      required
                    />
                    <label htmlFor="floatingInput">Email address</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      className="form-control"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      name="password"
                      id="pword"
                      placeholder="Password"
                      required
                    />
                    <label htmlFor="floatingPassword">Password</label>
                  </div>
                  <button type="submit" className="btn btn-success">
                    Login
                  </button>
                  <div className="container mt-3">
                    <h7>
                      Dont have account?{" "}
                      <Link
                        to="/register"
                        style={{ color: "green", textDecoration: "none" }}
                      >
                        Register
                      </Link>
                    </h7>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Login;
