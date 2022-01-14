import React from 'react'
import {connect} from 'react-redux'

const dummyData = [{
  type: "tops",
  name: "shirt"
}]
const special = [{
  type: "shoes",
  name:"converse",
  price: 20.00,
  description: "lorem ipsum",
  imageUrl: "https://skillz4kidzmartialarts.com/wp-content/uploads/2017/04/default-image.jpg"
},
{
  type: "shoes",
  name:"converse2",
  price: 30.00,
  description: "lorem ipsum",
  imageUrl: "https://skillz4kidzmartialarts.com/wp-content/uploads/2017/04/default-image.jpg"
}
]
export class Homepage extends React.Component {

  render() {

    return(
      <div id="homepage">
        <h3>Hello!</h3>
        <div className="special-collection">
          <div id="special-img">
            <img src="https://skillz4kidzmartialarts.com/wp-content/uploads/2017/04/default-image.jpg" />
          </div>
          <div id="special-info">
            <h2>Special Collection</h2>
            <button id="special-button">Shop Now</button>
          </div>
        </div>
        <span>Shop By Category</span>
        <div className="categories">

          <div className="category">
            <img src="https://cdn.shopify.com/s/files/1/0047/0705/7752/products/PS-BellaCanvas-3001T-B2copy_0aa70df6-7c89-4b74-86ef-f64833bbef7e_256x.jpg?v=1639001512"/>
            <h4>Tops</h4>
          </div>
          <div className="category">
            <img src="https://cdn.shopify.com/s/files/1/0047/0705/7752/products/PS-BellaCanvas-3001T-B2copy_0aa70df6-7c89-4b74-86ef-f64833bbef7e_256x.jpg?v=1639001512"/>
            <h4>Bottoms</h4>
          </div>
          <div className="category">
            <img src="https://cdn.shopify.com/s/files/1/0047/0705/7752/products/PS-BellaCanvas-3001T-B2copy_0aa70df6-7c89-4b74-86ef-f64833bbef7e_256x.jpg?v=1639001512"/>
            <h4>Shoes</h4>
          </div>
          <div className="category">
            <img src="https://cdn.shopify.com/s/files/1/0047/0705/7752/products/PS-BellaCanvas-3001T-B2copy_0aa70df6-7c89-4b74-86ef-f64833bbef7e_256x.jpg?v=1639001512"/>
            <h4>Accessories</h4>
          </div>
        </div>

      </div>

    )
  }
}

export default Homepage
