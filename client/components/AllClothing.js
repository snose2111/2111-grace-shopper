import React from "react";
import { connect } from "react-redux";

const dummyClothing = [
  {
    type: "shoes",
    name: "Converse X COMME des GARÇONS PLAY",
    price: 150.0,
    description: "Unisex high top shoe",
    quantity: 80,
    color: "Grey",
    rating: 4.66,
    imageUrl:
      "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/221246M236000_1/comme-des-garcons-play-grey-converse-edition-half-heart-chuck-70-sneakers.jpg",
  },
  {
    type: "shoes",
    name: "Converse X COMME des GARÇONS PLAY",
    price: 150.0,
    description: "Unisex low top shoe",
    quantity: 68,
    color: "Navy",
    rating: 3.47,
    imageUrl:
      "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/221246M237001_1/comme-des-garcons-play-blue-converse-edition-half-heart-chuck-70-sneakers.jpg",
  },
  {
    type: "shoes",
    name: "Converse X COMME des GARÇONS PLAY",
    price: 150.0,
    description: "Unisex high top shoe",
    quantity: 75,
    color: "Navy",
    rating: 4.32,
    imageURL:
      "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/221246M236001_1/comme-des-garcons-play-blue-converse-edition-half-heart-chuck-70-sneakers.jpg",
  },
  {
    type: "shoes",
    name: "Black Chuck Taylor All Star Platform Hi Sneakers",
    price: 150.0,
    description: "Unisex low top shoe",
    quantity: 23,
    color: "Grey",
    rating: 4.89,
    imageURL:
      "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/221246M236000_1/comme-des-garcons-play-grey-converse-edition-half-heart-chuck-70-sneakers.jpg",
  },
  {
    type: "shoes",
    name: "Beige Summer Daze Chuck 70 sneakers",
    price: 45.0,
    description: "Unisex low top shoe",
    quantity: 23,
    color: "Grey",
    rating: 2.39,
    imageURL:
      "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/221246M236000_1/comme-des-garcons-play-grey-converse-edition-half-heart-chuck-70-sneakers.jpg",
  },
];

export class AllClothing extends React.Component {
  render() {
    let clothing = dummyClothing;
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
                <div className="all-view-single-card">
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
                        <span id="all-view-item-price">${item.price}</span>
                      </div>
                      <span id="all-view-item-description">
                        {item.description}
                      </span>
                    </div>

                    <button id="all-view-item-button">Add to Cart</button>
                  </div>
                </div>
              );
            })
          ) : (
            <p>No Clothing</p>
          )}
        </div>
      </div>
    );
  }
}

// const mapState = (state) => {
//   return { clothing: state.allClothing };
// };

// const mapDispatch = (dispatch) => {
//   return {
//     getClothing: () => dispatch(fetchClothing()),
//   };
// };

// export default connect(mapState, mapDispatch)(AllClothing);

export default AllClothing;
