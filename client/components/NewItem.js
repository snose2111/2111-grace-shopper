
import React from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import {createNewItem} from "../store/createNewItem"
 
 
class NewItem extends React.Component {
   constructor(){
       super()
       this.state = {
           name: "",
           type: "",
           price: "",
           quantity: "",
           color: "",
           description: "",
           imageUrl: "",
          }

       this.handleChange = this.handleChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
   }
   handleChange(evt) {
       this.setState({
         [evt.target.name]: evt.target.value
       });
     }
      handleSubmit(evt) {
       evt.preventDefault();
       
      let history = this.props.history;
      console.log("history from NewItem--------------->",history)
       this.props.createNewItem({ ...this.state }, history );
     }
 
   render() {
       console.log(`the state is${this.state}`)
         return(
           <div className="all-view">
               <form onSubmit={this.handleSubmit}>
               <div className="all-view-header">    
                 <span id="create-item-header-text">Add new item</span>
               </div>

               <div className="create-item-single-card">
                    <span id="create-item-field-text">Type:  </span>
                    <input name="type" type="text" value={this.state.type} onChange={this.handleChange} />
               </div>
               <div className="create-item-single-card">  
                    <span id="create-item-field-text">Name:  </span>
                    <input name="name" type="text" value={this.state.name} onChange={this.handleChange} />
               </div>
               <div className="create-item-single-card">  
                    <span id="create-item-field-text">Price:  </span>
                    <input name="price" type="text" value={this.state.price} onChange={this.handleChange} />
               </div>
               <div className="create-item-single-card">  
                    <span id="create-item-field-text">Quantity:  </span>
                    <input name="quantity" type="text" value={this.state.quantity} onChange={this.handleChange} />
               </div><div className="create-item-single-card">  
                    <span id="create-item-field-text">Color:  </span>
                    <input name="color" type="text" value={this.state.color} onChange={this.handleChange} />
               </div>
               <div className="create-item-single-card">  
                    <span id="create-item-field-text">Description:  </span>
                    <input name="description" type="text" value={this.state.description} onChange={this.handleChange} />
               </div>
               <div className="create-item-single-card">  
                    <span id="create-item-field-text">ImageUrl:  </span>
                    <input name="imageUrl" type="text" value={this.state.imageUrl} onChange={this.handleChange} />
               </div>
                
               <br/>
               <button type="submit" id="submit-button">Submit</button>
               </form> 
           </div>
        
       )
   }
}
 
const mapDispatch = (dispatch) => {
   return {
       createNewItem: (item, history) => dispatch(createNewItem(item, history))
   };
};
 
export default connect(null, mapDispatch)(NewItem);