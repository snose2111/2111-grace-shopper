import React from "react";
import { connect } from "react-redux";
import { fetchClothing } from "../store/clothing";
import { addToCart } from "../store/cart";
import { Link } from "react-router-dom";

export class AllClothing extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

    // why do you need this if you're doing mapStateToProps?
    this.state = {
      clothing: [],
    };
  }

  componentDidMount() {
    // the `slice(6)` is what's known as a 'magic number'.
    // what is it? What does it mean? What happens if the url
    // changes in the future? There must be a better way.
    this.props.getClothing(this.props.location.pathname.slice(6));
  }

  // So this is quite hard to read.
  // nested 'if' statements should be avoided whenever
  // possible.
  // it's not clear to me why you are 'awaiting'
  // this.props.getClothing since you don't ever
  // read the result.
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

  // what about this instead? Still not sure about that await
  // but easier to read
  async componentDidUpdate({ prevMatch, prevClothing }) {
    let { getClothing, clothing, match } = this.props;
    let { category = "all" } = match.params;
    let newCategory = category !== prevMatch.params.category;
    let newClothing = clothing.length !== prevClothing.length;

    if (newCategory) {
      await getClothing(category);
    }
    if (newClothing || newCategory) {
      this.setState({ clothing });
    }
  }

  handleClick(evt) {
    this.props.addToCart(evt.target.value);
  }

  render() {
    // I assume this will be replaced with redux?
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
  // why is `cart` needed here?
  return { clothing: state.clothing, cart: state.cart };
};

const mapDispatch = (dispatch) => {
  return {
    getClothing: (category) => dispatch(fetchClothing(category)),
    addToCart: (itemId) => dispatch(addToCart(itemId)),
  };
};

export default connect(mapState, mapDispatch)(AllClothing);
