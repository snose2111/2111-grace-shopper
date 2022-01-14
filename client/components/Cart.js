import React from "react";

let dummyData = [
  {
    type: "accessories",
    name: "Chubby Huggy Hoop, Silver (Single)",
    price: 38.0,
    description: "earring",
    color: "silver",
    quantity: 24,
    imageUrl:
      "https://www.catbirdnyc.com/media/catalog/product/cache/76a94e0cda397936c0138d2cf05d7fe1/h/u/huggiehoop-ss-p1.jpg",
  },
  {
    type: "tops",
    name: "something top",
    price: 150.0,
    description: "shirt",
    color: "green",
    quantity: 89,
    ImageURL:
      "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/221232F107011_1/rick-owens-silver-seb-blouse.jpg",
  },
  {
    type: "bottoms",
    name: "something pants",
    price: 140.0,
    description: "pencil skirt",
    color: "orange",
    quantity: 999,
    ImageURL:
      "https://img.ssensemedia.com/images/f_auto,q_auto:best/202387F090217_1/kenzo-orange-straight-miniskirt.jpg",
  },
];

export class Cart extends React.Component {
  render() {
    return (
      <div className="cart-view">
        <div id="header">Shopping Bag</div>
        <div id="main">
          <div id="left">
            {dummyData.map((item) => (
              <div key={item.id} id="cart-item">
                <img src={item.ImageURL} width="150px" />
                <div id="inner-cart-item">
                  <span>{item.name}</span>
                  <span>{item.description}</span>
                </div>
              </div>
            ))}
          </div>
          <div id="right"></div>
        </div>
      </div>
    );
  }
}

export default Cart;
