import React from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../store/allUsers";

export class AllUsers extends React.Component {
  constructor() {
    super();

    // this is not necessary, componentDidMount should never
    // be called directly, so you don't need to bind it.
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    this.props.loadUsers();
  }

  render() {
    let users = this.props.users;
    return (
      <div>
        <div className="all-view-header">
          <span id="all-view-header-text">Users</span>
        </div>
        <div className="all-view-cards">
          {users.length ? (
            users.map((user) => {
              return (
                <div key={user.id} className="all-view-single-card">
                  <div className="all-view-item-info">
                    <div>
                      <div id="info-row">
                        <span id="all-view-user-name">{user.username}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p>Loading users...</p>
          )}
        </div>
      </div>
    );
  }
}

const mapState = (state) => ({ users: state.users });

const mapDispatch = (dispatch) => ({
  loadUsers: () => dispatch(fetchUsers()),
});

export default connect(mapState, mapDispatch)(AllUsers);
