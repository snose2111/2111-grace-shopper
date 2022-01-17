import React from "react";
import { connect } from "react-redux";
import { fetchItem } from "../store/item";
import { addToCart } from "../store/cart";

export class SingleItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.props.getItem(this.props.match.params.itemID);
  }

  handleClick(evt) {
    this.props.addToCart(evt.target.value);
  }

  render() {
    let item = this.props.item;
    return (
      <div>
        {!item ? (
          <p>Whoops! Something went wrong.</p>
        ) : !item.id ? (
          <p>Loading item...</p>
        ) : (
          <div className="single-view-container">
            <div className="single-view-picture" width="400" height="500">
              <img src={item.imageUrl} width="400" />
            </div>

            <div className="single-view-card">
              <div id="item-info">
                <span id="single-item-name">{item.name}</span>
                <span id="single-item-descrip">{item.description}</span>
                <span id="single-item-price">${item.price}</span>
              </div>

              <div className="item-qty">
                <label htmlFor="quantity">Quantity: </label>
                <input
                  name="quantity"
                  type="number"
                  min="0"
                  max={item.quantity}
                  defaultValue="1"
                />
              </div>
              <div className="item-cart">
                <button
                  id="big-cart"
                  value={item.id}
                  onClick={this.handleClick}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapState = (state) => {
  return { item: state.item, cart: state.cart };
};

const mapDispatch = (dispatch) => {
  return {
    getItem: (itemId) => dispatch(fetchItem(itemId)),
    addToCart: (itemId) => dispatch(addToCart(itemId)),
  };
};

export default connect(mapState, mapDispatch)(SingleItem);
