import React from "react";
import { connect } from "react-redux";
import { fetchCart, deleteFromCart } from "../store/cart";
import { Link } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";

const reducer = (previousValue, currentValue) => previousValue + currentValue;

export class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
    };
    this.handleClick = this.handleClick.bind(this);
    this.calcTotal = this.calcTotal.bind(this);
    this.handleToken = this.handleToken.bind(this);
  }

  async componentDidUpdate(prevProps) {
    const { userId, cart } = this.props;

    if (userId !== prevProps.userId) {
      await this.props.getCart(this.props.userId);
    }

    if (cart.length !== prevProps.cart.length) {
      this.setState({ cart: this.props.cart });
    }
    console.log("CART", cart);
  }

  handleClick(evt) {
    const cartId = this.state.cart[0].carts[0].id;
    this.props.deleteItem(cartId, evt.target.value);
  }

  calcTotal() {
    let clothing = this.state.cart;
    let total = 0;
    for (let i = 0; i < clothing.length; i++) {
      total += Number(clothing[i].carts[0].cart_item.price);
    }
    return total;
  }

  handleToken(token, addresses) {
    console.log(token, addresses);
  }

  render() {
    const cart = this.state.cart;
    return (
      <div className="cart-view">
        <div id="main">
          {!cart.length ? (
            <p>Your cart is empty!</p>
          ) : (
            <div id="left">
              <div id="header">Shopping Bag</div>
              {cart.map((item) => (
                <div key={item.id} id="cart-item">
                  <div id="left">
                    <img id="cart-img" src={item.imageUrl} />
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
                          defaultValue={item.carts[0].cart_item.quantity}
                          onChange={(e) => {
                            item.quantity = e.target.value;
                          }}
                        />
                        <button id="update-qty">Update</button>
                      </div>
                    </div>
                  </div>

                  <div id="right">
                    <span>${item.carts[0].cart_item.price} USD</span>
                    <button
                      id="remove-button"
                      onClick={() => this.props.deleteItem(item.carts[0].id, item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              <div className="footer">
                <div id="left">
                  <span>Total</span>
                  <span>Shipping Estimate</span>
                  <span className="total">Order Total</span>
                </div>
                <div id="right">
                  <span>${this.calcTotal()}.00</span>
                  <span>Calculated at checkout</span>

                  <span className="total">${this.calcTotal()}.00</span>
                </div>
              </div>
            </div>
          )}
          <div id="right">
            <h1 id="header">Checkout</h1>
            <div id="content">
              <div id="checkout-button">
                <Link to="/checkout">
                  <button id="checkout" onClick={this.handleClick}>
                    Proceed to Checkout
                  </button>
                  <StripeCheckout
                    stripeKey="pk_test_51KJtuAHtQnejSfE8vVL5HSflvetnPMGnUM2cN8CpgnONAEwyjSsBIthivm1AyXShQYlBqtDoMPTaLwqvTUQ2D5vE00DuAC6mZN"
                    token={this.handleToken}
                    billingAddress
                    shippingAddress
                    // amount={item.price * 100}
                    // name={item.name}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  console.log("STATE", localStorage.getItem("cart"));
  return { cart: state.cart, userId: state.auth.id };
};

const mapDispatch = (dispatch) => {
  return {
    getCart: (id) => dispatch(fetchCart(id)),
    deleteItem: (cartId, itemId) => dispatch(deleteFromCart(cartId, itemId)),
  };
};

export default connect(mapState, mapDispatch)(Cart);
