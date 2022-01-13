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
          <div className="special-img">
            <img src="https://skillz4kidzmartialarts.com/wp-content/uploads/2017/04/default-image.jpg" />
          </div>
          <h4>Special Collection</h4>
          <button>Shop Now</button>
        </div>

        <div className="categories">
          <div className="category">
            <h3>Tops</h3>
          </div>
          <div className="category">
            <h3>Bottoms</h3>
          </div>
          <div className="category">
            <h3>Shoes</h3>
          </div>
          <div className="category">
            <h3>Accessories</h3>
          </div>
        </div>

      </div>

    )
  }
}

export default Homepage
