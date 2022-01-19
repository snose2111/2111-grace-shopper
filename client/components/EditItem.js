import React from 'react';
import {connect} from 'react-redux';
//
import {editItem} from "../store/editItem"
import { fetchItem } from '../store/item';


class EditItem extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            type: "",
            name: "",
            price: "",
            quantity: "",
            color: "",
            description: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() { 
        this.props.fetchItem(this.props.match.params.itemID);
      }
    
    handleChange(evt) {
        this.setState({
          [evt.target.name]: evt.target.value
        });
      }
  
      handleSubmit(evt) {
        evt.preventDefault();
        this.props.editItem({ ...this.state, id:this.props.match.params.itemID }, this.props.history);
      }

    render() {
          return(
            <div> 
              <form onSubmit={this.handleSubmit}>
               <div className="all-view-header">    
                 <span id="create-item-header-text">Edit Item</span>
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
const mapState = ( state ) => ({
    item: state.item
  });

const mapDispatch = (dispatch) => {
    return {
        fetchItem: (id) => dispatch(fetchItem(id)),
        editItem: (item, history) => dispatch(editItem(item, history))
        
    };
};

export default connect(mapState, mapDispatch)(EditItem);