import React from "react";
import { connect } from "react-redux";
import { fetchClothing, deleteItem } from "../store/clothing";
import { fetchCart, addToCart } from "../store/cart";
import { Link } from "react-router-dom";

export class AllClothing extends React.Component {
  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);
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
        count: 1,
        price,
      });
    }
    localStorage.setItem("cart", JSON.stringify(items));
  }

  render() {
    let clothing = this.state.clothing;
    let auth = this.props.auth;

    console.log("this state ===>", this.state);

    return (
      <div className="all-view">
        {auth.isAdmin ? (
          <div>
            <Link to="/createItem">
              <button>Add New Item</button>
            </Link>
          </div>
        ) : (
          <div></div>
        )}


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
                  {auth.isAdmin ? (
                    <div>

                      <Link to={`/item/${item.id}`}>
                        <button>Edit Item </button>{" "}
                      </Link>
                      <button
                        type="submit"
                        onClick={() => {
                          this.props.deleteItem(item.id);
                        }}
                      >
                        {" "}
                        X
                      </button>

                    </div>
                  ) : (
                    <div></div>
                  )}
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
                      value={item.id}

                      onClick={() =>
                        this.props.auth.id
                          ? this.props.addToCart(this.props.userId, {
                              id: item.id,
                              price: item.price,
                              quantity: 1,
                            })
                          : this.addNewItem(
                              item.id,
                              item.type,
                              item.name,
                              item.imageUrl,
                              item.price
                            )
                      }

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
  return {
    clothing: state.clothing,
    cart: state.cart,
    auth: state.auth,
    userId: state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getClothing: (category) => dispatch(fetchClothing(category)),
    getCart: (userId) => dispatch(fetchCart(userId)),
    addToCart: (userId, itemId) => dispatch(addToCart(userId, itemId)),
    deleteItem: (itemId) => dispatch(deleteItem(itemId)),
  };
};

export default connect(mapState, mapDispatch)(AllClothing);
