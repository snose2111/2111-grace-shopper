import React from "react";
import { connect } from "react-redux";
import { authenticate } from "../../store";

/**
 * COMPONENT
 */
class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const username = evt.target.username.value;
    const password = evt.target.password.value;
    const firstName = evt.target.firstName.value;
    const lastName = evt.target.lastName.value;
    const email = evt.target.email.value;
    const newUser = { username, password, firstName, lastName, email };
    this.props.signUp(newUser, "signup", this.props.history);
  }

  render() {
    const { error } = this.props;
    return (
      <div id="signup">
        <form onSubmit={this.handleSubmit} name="signup">
          <div>
            <label htmlFor="email">
              <small>Email Address</small>
            </label>
            <input name="email" type="text" />
          </div>
          <div>
            <label htmlFor="username">
              <small>Username</small>
            </label>
            <input name="username" type="text" />
          </div>
          <div>
            <label htmlFor="password">
              <small>Password</small>
            </label>
            <input name="password" type="password" />
          </div>
          <div>
            <label htmlFor="firstName">
              <small>First Name</small>
            </label>
            <input name="firstName" type="text" />
          </div>
          <div>
            <label htmlFor="lastName">
              <small>Last Name</small>
            </label>
            <input name="lastName" type="text" />
          </div>
          <div>
            <button type="submit">Sign Up</button>
          </div>
          {error && error.response && <div> {error.response.data} </div>}
        </form>
      </div>
    );
  }
}

const mapSignup = (state) => {
  return {
    error: state.auth.error,
  };
};

const mapDispatch = (dispatch) => {
  return {
    signUp: (newUser, formName, history) =>
      dispatch(authenticate(newUser, formName, this.props.history)),
  };
};

export default connect(mapSignup, mapDispatch)(Signup);
