import React from "react";
import { connect } from "react-redux";
import { fetchClothing } from "../store/clothing";
import { addToCart } from "../store/cart";

export class AllClothing extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.getClothing();
  }

  handleClick(evt) {
    this.props.addToCart(evt.target.value);
  }

  render() {
    let clothing = this.props.clothing;
    return (
      <div className="all-view">
        <div className="all-view-header">
          <span id="all-view-header-text">Shop All Clothing</span>
          <div className="all-view-header-buttons">
            <button>Filter</button>
            <button>Sort</button>
          </div>
        </div>

        <div className="all-view-cards">
          {clothing.length ? (
            clothing.map((item) => {
              return (
                <div key={item.id} className="all-view-single-card">
                  <div className="all-view-img">
                    <img
                      src="https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/221288F120000_1/proenza-schouler-off-white-canvas-city-lug-lace-up-derbys.jpg"
                      width="200px"
                    />
                  </div>

                  <div className="all-view-item-info">
                    <div>
                      <div id="info-row">
                        <span id="all-view-item-name">{item.name}</span>
                        <span id="all-view-item-price">{item.price}</span>
                      </div>
                      <span id="all-view-item-description">
                        {item.description}
                      </span>
                    </div>

                    <button
                      id="all-view-item-button"
                      value={item} // want to pass in item Id probably
                      onClick={this.handleClick}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <p>Loading clothing...</p>
          )}
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return { clothing: state.clothing, cart: state.cart };
};

const mapDispatch = (dispatch) => {
  return {
    getClothing: () => dispatch(fetchClothing()),
    addToCart: (itemId) => dispatch(addToCart(itemId)),
  };
};

export default connect(mapState, mapDispatch)(AllClothing);
