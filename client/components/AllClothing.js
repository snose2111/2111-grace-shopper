import React from "react";
import { connect } from "react-redux";
import { fetchClothing } from "../store/clothing";
import { addToCart } from "../store/cart";
import { Link } from "react-router-dom";

export class AllClothing extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      clothing: [],
    };
    this.addNewItem = this.addNewItem.bind(this);
  }

  componentDidMount() {
    this.props.getClothing(this.props.location.pathname.slice(6));
  }

  async componentDidUpdate(prevProps) {
    if (this.props.clothing.length !== prevProps.clothing.length) {
      this.setState({ clothing: this.props.clothing });
    }
    if (this.props.match.params.category !== prevProps.match.params.category) {
      if (this.props.match.params.category) {
        await this.props.getClothing(this.props.match.params.category);
        this.setState({ clothing: this.props.clothing });
      } else {
        await this.props.getClothing("all");
        this.setState({ clothing: this.props.clothing });
      }
    }
  }

  handleClick(evt) {
    this.props.addToCart(evt.target.value);
    // const itemId = evt.target.value;
    // console.log("ITEM ID", itemId);
    // let localCart = JSON.parse(window.localStorage.getItem("cart"));
    // if (!localCart) {
    //   const currentItem = this.props.clothing.filter((item) => {
    //     console.log("INSIDE FILTER", item.id);
    //     return parseInt(itemId) === parseInt(item.id);
    //   });
    //   window.localStorage.setItem("cart", JSON.stringify(currentItem));
    // } else {
    //   const currentItem = this.props.clothing.filter((item) => {
    //     return parseInt(itemId) === parseInt(item.id);
    //   });
    //   localCart.push(JSON.stringify(currentItem));
    //   window.localStorage.setItem("cart", JSON.stringify(localCart));
    // }
  }

  addNewItem(clothingId, type, name, ImageUrl, price) {
    let items = JSON.parse(localStorage.getItem("cart")) || [];
    let item = items.find((item) => item.name === name);
    if (item) {
      item.count = Number(item.count) + 1;
    } else {
      items.push({
        clothingId,
        type,
        name,
        ImageUrl,
        price,
      });
    }
    localStorage.setItem("cart", JSON.stringify(items));
  }

  render() {
    let clothing = this.state.clothing;
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
                    <Link to={`/shop/item/${item.id}`}>
                      <img src={item.imageUrl} width="200px" />
                    </Link>
                  </div>

                  <div className="all-view-item-info">
                    <div>
                      <Link to={`/shop/item/${item.id}`}>
                        <div id="info-row">
                          <span id="all-view-item-name">{item.name}</span>
                          <span id="all-view-item-price">{item.price}</span>
                        </div>

                        <span id="all-view-item-description">
                          {item.description}
                        </span>
                      </Link>
                    </div>

                    <button
                      className="add-to-cart"
                      type="button"
                      value={item.id} // want to pass in item Id probably
                      onClick={() => {
                        this.addNewItem(
                          item.id,
                          item.type,
                          item.name,
                          item.imageUrl,
                          item.price
                        );
                      }}
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
    getClothing: (category) => dispatch(fetchClothing(category)),
    addToCart: (itemId) => dispatch(addToCart(itemId)),
  };
};

export default connect(mapState, mapDispatch)(AllClothing);
