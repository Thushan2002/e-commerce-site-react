import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import auth_icon from "../assets/image/auth-image.png";

const SignUp = () => {
  return (
    <div>
      <Navbar />
      <section className="section">
        <div className="auth_container">
          <div className="auth_img">
            <img src={auth_icon} alt="" className="auth_image" />
          </div>
          <div className="auth_content">
            <form action="" className="auth_form">
              <h2 className="form_title">Create your account</h2>
              <p className="auth_p">Enter your details below</p>
              <div className="form_group">
                <input type="text" placeholder="Name" className="form_input" />
              </div>
              <div className="form_group">
                <input
                  type="email"
                  placeholder="Email"
                  className="form_input"
                />
              </div>
              <div className="form_group form_pass">
                <input
                  type="password"
                  placeholder="Password"
                  className="form_input"
                />
              </div>
              <div className="form_group">
                <button className="form_btn">
                  <Link to="/" className="form_link">
                    Create Account
                  </Link>
                </button>
              </div>
              <div className="form_group">
                <span>
                  Already have an account?{" "}
                  <Link to="/login" className="form_auth_link">
                    Login
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
