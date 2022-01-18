import React from "react";
import react from "react";
import { Link } from "react-router-dom";

class Checkout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="checkout">
        <div id="main">
          <h1>Thank you for your order!</h1>
          <div id="sub">
            <p>Please check your email for your receipt.</p>
            <Link to={"/"}>Back to homepage</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Checkout;
