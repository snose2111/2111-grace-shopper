import React from "react";
import { connect } from "react-redux";
import { fetchItem } from "../store/item";

export class SingleItem extends React.Component {
  componentDidMount() {
    this.props.getItem(this.props.match.params.itemID);
  }

  render() {
    let item = this.props.item;
    return (
      <div>
        {!item.id ? (
          <p>Loading item...</p>
        ) : (
          <div className="single-view">
            <div className="single-item-picture">
              <img src={item.imageUrl} width="400" />
            </div>

            <div className="single-item-information">
              <button>Back</button>
              <h1>{item.name}</h1>
              <h1>${item.price}</h1>
              <div className="item-descrip">
                <h3>Details</h3>
                <p>{item.description}</p>
              </div>
              <div className="item-buttons">
                <label htmlFor="quantity">Quantity: </label>
                <input
                  name="quantity"
                  type="number"
                  min="0"
                  max={item.quantity}
                  defaultValue="1"
                />

                <button>Add to Cart</button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapState = (state) => {
  return { item: state.item };
};

const mapDispatch = (dispatch) => {
  return {
    getItem: (itemId) => dispatch(fetchItem(itemId)),
  };
};

export default connect(mapState, mapDispatch)(SingleItem);
