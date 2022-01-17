import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../store";
import { BsSearch, BsCart4 } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";

const Navbar = ({ handleClick, isLoggedIn }) => (
  <div>
    {/* {isLoggedIn ? ( */}
      <div>
        {/* The navbar will show these links after you log in */}
        <Link to="/home">Home</Link>
        <a href="#" onClick={handleClick}>
          Logout
        </a>
      </div>
    {/* ) : ( */}
      <div className="main-nav">
        <div className="left-navbar">
          {/* The navbar will show these links before you log in */}
          {/* <a href="/">{<AiOutlineHome />}LOGO</a> */}
          <a href="/">LOGO</a>
          <span className="search-button">
            <input type="text" placeholder="Search..." />
            <button>
              {
                <BsSearch
                  style={{ backgroundColor: "black", color: "white" }}
                />
              }
            </button>
          </span>
        </div>
        <div className="type">
          <Link to="/shop/all">Shop All</Link>
          <Link to="/shop/tops">👕 Tops</Link>
          <Link to="/shop/bottoms">👖 Bottoms</Link>
          <Link to="/shop/accessories">🧢 Accessories</Link>
          <Link to="/shop/shoes">👟 Shoes</Link>
        </div>
        <div className="right-navbar">
          {/* The navbar will show these links before you log in */}
          <a href="/login">{<VscAccount />}Login</a>
          <a href="/cart">{<BsCart4 />} Cart (3)</a>
        </div>
      </div>
    {/* )} */}
    {/* <hr /> */}
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
