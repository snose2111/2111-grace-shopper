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
          <h1>All Clothing</h1>
        </div>

        <div className="all-view-cards">
          {clothing.length ? (
            clothing.map((item) => {
              return (
                <div>
                  <div>
                    <img
                      src="https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/221288F120000_1/proenza-schouler-off-white-canvas-city-lug-lace-up-derbys.jpg"
                      width="200px"
                    />
                  </div>

                  <h3>{item.name}</h3>
                  <h4>${item.price}</h4>
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
