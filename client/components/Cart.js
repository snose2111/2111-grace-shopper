import React from "react";
import { connect } from "react-redux";
import { fetchCart } from "../store/cart";

const reducer = (previousValue, currentValue) => previousValue + currentValue;

export class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
    };
  }

  componentDidMount() {
    this.props.getCart(this.props.user);
  }

  componentDidUpdate(prevProps) {
    if (this.props.cart.length !== prevProps.cart.length) {
      this.setState({ cart: this.props.cart });
    }
  }

  render() {
    const cart = this.state.cart;
    return (
      <div className="cart-view">
        <div id="main">
          {!cart.length ? (
            <p>Loading cart...</p>
          ) : (
            <div id="left">
              <div id="header">Shopping Bag</div>
              {cart.map((item) => (
                <div key={item.id} id="cart-item">
                  <div id="left">
                    <img id="cart-img" src={item.ImageURL} />
                    <div id="inner-cart-item">
                      <span id="item-name">{item.name}</span>
                      <span>{item.description}</span>
                      <div className="item-qty">
                        <label htmlFor="quantity">Quantity: </label>
                        <input
                          name="quantity"
                          type="number"
                          min="0"
                          max={item.quantity}
                          defaultValue="1"
                        />
                        <button id="update-qty">Update</button>
                      </div>
                    </div>
                  </div>
                  <div id="right">
                    <span>${item.price} USD</span>
                    <button id="remove-button">Remove</button>
                  </div>
                </div>
              ))}
              <div className="footer">
                <div id="left">
                  <span>Total</span>
                  <span>Shipping Estimate</span>
                  <span>Tax</span>
                  <span className="total">Order Total</span>
                </div>
                <div id="right">
                  <span>${cart.map((item) => item.price).reduce(reducer)}</span>
                  <span>Calculated at checkout</span>
                  <span>
                    ${cart.map((item) => item.price).reduce(reducer) * 0.08875}
                  </span>
                  <span className="total">$Total here</span>
                </div>
              </div>
            </div>
          )}
          <div id="right">
            <div id="header">Checkout</div>
            <div id="content">
              <span>Continue to checkout.</span>
              <div id="checkout-button">
                <button id="checkout">Proceed to Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return { cart: state.cart, auth: state.auth };
};

const mapDispatch = (dispatch) => {
  return {
    getCart: (id) => dispatch(fetchCart(id)),
  };
};

export default connect(mapState, mapDispatch)(Cart);
