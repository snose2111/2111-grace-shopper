import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export class Homepage extends React.Component {
  render() {
    return (
      <div id="homepage">
        <div id="homepage-items">
          <div className="special-collection">
            <div id="special-img">
              <img
                src="https://www.converse.com/on/demandware.static/-/Library-Sites-SharedLibrary/default/dw731772ba/firstspirit/media/19_landing_pages/2021_summer_2/cdg_3/06_1/D-CONVERSE-SU21-CDG-COLORS-LP-P1.jpg"
                style={{ width: "80%" }}
              />
            </div>
            <div id="special-info">
              <h2>Shop special collection!</h2>
              <Link to={"/shop/shoes"}>
                <button id="special-button">Shop Now</button>
              </Link>
            </div>
          </div>

          <div className="categories">
            <div className="category">
              <Link to={"/shop/tops"}>
                <img
                  src="https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  style={{ width: "500px" }}
                />
                <h4 style={{ color: "black" }}>Tops</h4>
              </Link>
            </div>
            <div className="category">
              <Link to={"/shop/bottoms"}>
                <img
                  src="https://images.pexels.com/photos/4210860/pexels-photo-4210860.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  style={{ width: "500px" }}
                />
                <h4 style={{ color: "black" }}>Bottoms</h4>
              </Link>
            </div>
            <div className="category">
              <Link to={"/shop/shoes"}>
                <img
                  src="https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29udmVyc2V8ZW58MHx8MHx8&w=1000&q=80"
                  style={{ width: "500px" }}
                />
                <h4 style={{ color: "black" }}>Shoes</h4>
              </Link>
            </div>
            <div className="category">
              <Link to={"/shop/accessories"}>
                <img
                  src="https://bnsec.bluenile.com/bluenile/is/image/bluenile/v1_Quality-Value_q1_2022_HP_TextUnder_2880x1945?$alloy_default$&hei=574&wid=850&fmt=pjpeg"
                  style={{ width: "500px" }}
                />
                <h4 style={{ color: "black" }}>Accessories</h4>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
