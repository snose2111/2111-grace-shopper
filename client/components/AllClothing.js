import React from "react";
import { connect } from "react-redux";
import { fetchClothing } from "../store/clothing";
import { addToCart } from "../store/cart";
import { Link } from "react-router-dom";
import { deleteItem } from "../store/editItem"

export class AllClothing extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      clothing: [],
    };
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
    // this.props.addToCart(evt.target.value);
    const itemId = evt.target.value;
    console.log("ITEM ID", itemId);
    let localCart = JSON.parse(window.localStorage.getItem("cart"));
    if (!localCart) {
      const currentItem = this.props.clothing.filter((item) => {
        console.log("INSIDE FILTER", item.id);
        return parseInt(itemId) === parseInt(item.id);
      });
      window.localStorage.setItem("cart", JSON.stringify(currentItem));
    } else {
      const currentItem = this.props.clothing.filter((item) => {
        return parseInt(itemId) === parseInt(item.id);
      });
      localCart.push(JSON.stringify(currentItem));
      window.localStorage.setItem("cart", JSON.stringify(localCart));
    }
  }

  render() {
    let clothing = this.state.clothing;
    return (
      <div className="all-view">
        <Link to="/createItem"><h4>Add Item</h4></Link>
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
                  <button
                            type="submit" onClick = {() => {                      
                            this.props.deleteItem(item.id);
                            }}> X
                          </button>
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
                      id="all-view-item-button"
                      value={item.id} // want to pass in item Id probably
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
    getClothing: (category) => dispatch(fetchClothing(category)),
    addToCart: (itemId) => dispatch(addToCart(itemId)),
    deleteItem: (itemId) => dispatch(deleteItem(itemId)),
  };
};

export default connect(mapState, mapDispatch)(AllClothing);
