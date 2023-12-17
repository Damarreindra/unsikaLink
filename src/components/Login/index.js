import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { login } from "../../actions/loginAction";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(null); // New state variable
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await dispatch(login(email, password));

      if (res) {
        console.log('Login successful');
        navigate('/home');
      } else {
        console.log('Login failed');
        setLoginError('Invalid email or password'); 
      }
    } catch (error) {
      setLoginError("Email / Password Salah"); 
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        backgroundImage: `url(/images/bg_login.png)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <div className="container bg-white p-5 rounded col-md-5">
          <div className="row g-0">
            <div className="col-md-12 mx-auto">
              <div className="card-body ">
                <h2 style={{color:'#051334'}} className="card-title fw-bold mb-4">
                Welcome Back
                </h2>
                {loginError && (
                  <div className="alert alert-danger" role="alert">
                    {loginError}
                  </div>
                )}
                <form onSubmit={handleSubmit} id="form">
                  <div className="form-floating mb-3 text-center">
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
                  <button type="submit" className="btn w-100"
                  style={{background:'#051334', color:"white"}}
                  >
                    Login
                  </button>
                  <div className="container mt-3 text-center">
                    <h7>
                      Don't have an account?{" "}
                      <Link
                        to="/register"
                        className="fw-bold"
                        style={{ color:'#051334', textDecoration: "none" }}
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
    </motion.div>
  );
}

export default Login;
