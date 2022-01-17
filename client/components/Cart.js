import React from "react";
import { connect } from "react-redux";
import fetchCart from "../store/cart";

let dummyData = [
  {
    type: "accessories",
    name: "Chubby Huggy Hoop",
    price: 38.0,
    description: "Silver (Single) Earring",
    color: "silver",
    quantity: 24,
    ImageURL:
      "https://www.catbirdnyc.com/media/catalog/product/cache/76a94e0cda397936c0138d2cf05d7fe1/h/u/huggiehoop-ss-p1.jpg",
  },
  {
    type: "tops",
    name: "something top",
    price: 150.0,
    description: "Sparkly Shirt",
    color: "green",
    quantity: 89,
    ImageURL:
      "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/221232F107011_1/rick-owens-silver-seb-blouse.jpg",
  },
  {
    type: "bottoms",
    name: "Something Pants",
    price: 140.0,
    description: "Pencil Skirt",
    color: "orange",
    quantity: 999,
    ImageURL:
      "https://img.ssensemedia.com/images/f_auto,q_auto:best/202387F090217_1/kenzo-orange-straight-miniskirt.jpg",
  },
];

const reducer = (previousValue, currentValue) => previousValue + currentValue;

export class Cart extends React.Component {
  componentDidMount() {
    this.props.getCart();
  }

  render() {
    const subtotal = dummyData.map((item) => item.price).reduce(reducer);
    const tax = subtotal * 0.08875;
    return (
      <div className="cart-view">
        <div id="main">
          <div id="left">
            <div id="header">Shopping Bag</div>
            {dummyData.map((item) => (
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
                <span>${subtotal}</span>
                <span>Calculated at checkout</span>
                <span>${tax}</span>
                <span className="total">${subtotal + tax}</span>
              </div>
            </div>
          </div>
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
  return { cart: state.cart };
};

const mapDispatch = (dispatch) => {
  return {
    getCart: () => dispatch(fetchCart()),
  };
};

export default connect(mapState, mapDispatch)(Cart);
