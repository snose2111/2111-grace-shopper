import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../store";
import { BsSearch, BsCart4 } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";

const Navbar = ({ handleClick, isLoggedIn, isAdmin, cartSize }) => {
  const logIn = (
    <div className="main-nav">
      <div className="left-navbar">
        {/* The navbar will show these links before you log in */}
        {/* <a href="/">{<AiOutlineHome />}LOGO</a> */}
        <a href="/">SNOSE</a>
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
        <a href="#" onClick={handleClick}>
          {<VscAccount />}Logout
        </a>
        <a href="/cart">
          {<BsCart4 />} Cart ({cartSize})
        </a>
      </div>
    </div>
  );

  const guest = (
    <div className="main-nav">
      <div className="left-navbar">
        {/* The navbar will show these links before you log in */}
        {/* <a href="/">{<AiOutlineHome />}LOGO</a> */}
        <a href="/">SNOSE</a>
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
        <a href="/cart">{<BsCart4 />} Cart (0)</a>
      </div>
    </div>
  );

  const admin = (
    <div className="main-nav">
      <div className="left-navbar">
        {/* The navbar will show these links before you log in */}
        {/* <a href="/">{<AiOutlineHome />}LOGO</a> */}
        <a href="/">SNOSE</a>
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
        <a href="#" onClick={handleClick}>
          {<VscAccount />}Logout
        </a>
        <a href="/cart">{<BsCart4 />} Cart (0)</a>
      </div>
    </div>
  );

  return (
    <div>
      <nav>
        {isAdmin && isLoggedIn ? admin : null}
        {!isAdmin && isLoggedIn ? logIn : null}
        {!isAdmin && !isLoggedIn ? guest : null}
      </nav>
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
    isAdmin: state.auth.isAdmin,
    cartSize: state.cart.reduce((sum, item) => {
      return sum + item.carts[0].cart_item.quantity;
    }, 0),
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
