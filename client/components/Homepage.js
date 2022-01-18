import React from "react"
import { connect } from "react-redux"
import { Link }  from "react-router-dom"

export class Homepage extends React.Component {

  render() {

    return(
      <div id="homepage">
        <div id="homepage-items">
          <div className="special-collection">
            <div id="special-img">
              <img src="https://skillz4kidzmartialarts.com/wp-content/uploads/2017/04/default-image.jpg" />
            </div>
            <div id="special-info">
              <h2>Shop all products!</h2>
              <Link to={"/shop/all"}>
                <button id="special-button">Shop Now</button>
              </Link>
            </div>
          </div>

          <div className="categories">
            <div className="category">
              <Link to={"/shop/all/tops"}>
              <img src="https://i.imgur.com/t7IFVXS.png"/>
                <h4>Tops</h4>
              </Link>
            </div>
            <div className="category">
            <Link to={"/shop/all/bottoms"}>
              <img src="https://i.imgur.com/t7IFVXS.png"/>
              <h4>Bottoms</h4>
            </Link>
            </div>
            <div className="category">
            <Link to={"/shop/all/shoes"}>
              <img src="https://i.imgur.com/t7IFVXS.png"/>
              <h4>Shoes</h4>
            </Link>
            </div>
            <div className="category">
            <Link to={"/shop/all/accessories"}>
              <img src="https://i.imgur.com/t7IFVXS.png"/>
              <h4>Accessories</h4>
            </Link>
            </div>
          </div>
        </div>
      </div>


    )
  }
}

export default Homepage
