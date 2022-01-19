import { createHashHistory } from "history";
import React from "react";
import { connect } from "react-redux";
import { authenticate } from "../../store";
import { Link } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const username = evt.target.username.value;
    const password = evt.target.password.value;
    this.props.login({ username, password }, "login", this.props.history);
  }

  render() {
    const { error } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit} name="login">
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
            <button type="submit">Login</button>
          </div>
          {error && error.response && (
            <div className="error"> {error.response.data} </div>
          )}
        </form>
        <div>
          <p>
            Don't have an account yet? <Link to={"/signup"}>Sign up!</Link>
          </p>
        </div>
      </div>
    );
  }
}

const mapLogin = (state) => {
  return {
    error: state.auth.error,
  };
};

const mapDispatch = (dispatch) => {
  return {
    login: (credentials, formName, history) =>
      dispatch(authenticate(credentials, formName, history)),
  };
};

export default connect(mapLogin, mapDispatch)(Login);
