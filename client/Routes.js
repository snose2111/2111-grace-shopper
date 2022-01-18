import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "./components/AuthForm/Login";
import Signup from "./components/AuthForm/Signup";
import Home from "./components/Home/Home";
import Homepage from "./components/Homepage";
import AllClothing from "./components/AllClothing";
import SingleItem from "./components/SingleItem";
import NewItem from "./components/NewItem";
import AllUsers from "./components/AllUsers";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import { me } from "./store";
import EditItem from "./components/EditItem";

/**
 * COMPONENT
 */

class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn } = this.props;
    const { user } = this.props;
    return (
      <div id="bottom">

        {isLoggedIn ? (
        <Switch>
          <Route exact path="/" component={Homepage} />
          {/* <Route path="/" exact component={Login} /> */}
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route exact path="/shop/all" component={AllClothing} />
          <Route exact path="/shop/item/:itemID" component={SingleItem} />
          <Route path="/shop/:category" component={AllClothing} />
          <Route path="/createItem" component={NewItem} />
          <Route path="/users" component={AllUsers} />
          <Route path="/cart/:userId" component={Cart} />
        </Switch>
         ) : (
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          {/* <Route exact path="/shop/all" component={AllClothing} /> */}
          <Route exact path="/shop/all" component={AllClothing} />
          <Route exact path="/shop/item/:itemID" component={SingleItem} />
          <Route path="/shop/:category" component={AllClothing} />
          <Route path="/createItem" component={NewItem} />
          <Route path="/users" component={AllUsers} />
          <Route path="/cart/:userId" component={Cart} />
        </Switch>

        )}
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id,
    user: state.auth,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));
