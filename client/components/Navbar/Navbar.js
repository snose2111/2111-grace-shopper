import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../store";

const Navbar = ({ handleClick, isLoggedIn }) => (
  <div className="nav-container">
    <nav>
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}
          <Link to="/home">Home</Link>
          <a href="#" onClick={handleClick}>
            Logout
          </a>
        </div>
      ) : (
        <div className="nav-bar">
          <div className="left-nav-bar">
            {/* The navbar will show these links before you log in */}
            <Link to="/">LOGO</Link>
            <Link to="/search">Search</Link>
          </div>
          <div className="type">
            <Link to="/tops">
              <h5>TOPS</h5>
            </Link>
            <Link to="/bottoms">
              <h5>BOTTOMS</h5>
            </Link>
            <Link to="/accessories">
              <h5>ACCESSORIES</h5>
            </Link>
            <Link to="/shoes">
              <h5>SHOES</h5>
            </Link>
          </div>
          <div className="right-nav-bar">
            <Link to="/login">Login</Link>
            {/* <Link to="/signup">Sign Up</Link> */}
            <Link to="/cart">Cart(3)</Link>
          </div>
        </div>
      )}
    </nav>
    <hr />
  </div>
);

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
