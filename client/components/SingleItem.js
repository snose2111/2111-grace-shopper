import React from "react";
import { connect } from "react-redux";

const dummyItem = {
  id: 1,
  type: "shoes",
  name: "Converse X COMME des GARÇONS PLAY",
  price: 150.0,
  description: "Unisex high top shoe",
  quantity: 80,
  color: "Grey",
  rating: 4.66,
  imageUrl:
    "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/221246M236000_1/comme-des-garcons-play-grey-converse-edition-half-heart-chuck-70-sneakers.jpg",
};

export class SingleItem extends React.Component {
  render() {
    let item = dummyItem;
    return (
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
    );
  }
}

export default SingleItem;
