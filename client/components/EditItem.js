import React from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import {editCampus} from "../redux/campuses"
import { fetchCampus } from '../redux/singleCampus';


class EditItem extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            type: "",
            name: "",
            price: "",
            quantity: "",
            color: "",
            desvription: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() { 
        this.props.fetchCampus(this.props.match.params.campusId);
      }
    
    handleChange(evt) {
        this.setState({
          [evt.target.name]: evt.target.value
        });
      }
  
      handleSubmit(evt) {
        evt.preventDefault();
        this.props.editStudent({ ...this.state, id:this.props.student.id });
      }

    render() {
          return(
            <div>
               <form onSubmit={this.handleSubmit}>
               <h3>Add new item:</h3>
               <h4>Type:</h4>
               <input name="type" type="text" value={this.state.type} onChange={this.handleChange} />
               <h4>Name:</h4>
               <input name="name" type="text" value={this.state.name} onChange={this.handleChange} />
               <h4>Price:</h4>
               <input name="price" type="text" value={this.state.price} onChange={this.handleChange} />
               <h4>quantity:</h4>
               <input name="quantity" type="text" value={this.state.quantity} onChange={this.handleChange} />
               <h4>color:</h4>
               <input name="color" type="text" value={this.state.color} onChange={this.handleChange} />
               <h4>description:</h4>
               <input name="description" type="text" value={this.state.description} onChange={this.handleChange} />


               
               <br/>
               <button type="submit">Edit</button>
               </form> 
           </div>
        )
    }
}
const mapState = ( state ) => ({
    campus: state.campus
  });

const mapDispatch = (dispatch, { history }) => {
    return {
        fetchCampus: (id) => dispatch(fetchCampus(id)),
        editCampus: (campus) => dispatch(editCampus(campus, history))
        
    };
};

export default connect(mapState, mapDispatch)(EditItem);
