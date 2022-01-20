import React from "react";
import { connect } from "react-redux";

const Checkout = () => {
  return (
    <div id="logout">
      <div id="main">
        <h1>You have signed out.</h1>
          <Link to={"/"}>Back to homepage</Link>
        </div>
      </div>
  );
}
