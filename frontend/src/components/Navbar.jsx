import React, { useContext } from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="" srcset="" />
        </div>
        <div className="links">
          <Link className="link" to="/?cartegory=art">
            <h6>ART</h6>
          </Link>
          <Link className="link" to="/?cartegory=science">
            <h6>SCIENCE</h6>
          </Link>
          <Link className="link" to="/?cartegory=technology">
            <h6>TECHNOLOGY</h6>
          </Link>
          <Link className="link" to="/?cartegory=cinema">
            <h6>CINEMA</h6>
          </Link>
          <Link className="link" to="/?cartegory=design">
            <h6>DESIGNT</h6>
          </Link>
          <Link className="link" to="/?cartegory=food">
            <h6>FOOD</h6>
          </Link>

          <span>{currentUser?.other?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link to="/login" className="link">
              Login
            </Link>
          )}

          <span className="write">
            {" "}
            <Link className="link" to="/write">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
