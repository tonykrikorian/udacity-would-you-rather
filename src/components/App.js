import React, { Component } from "react";
import { handleInitialData } from "../actions/shared";
import { connect } from "react-redux";
import Login from "./Login";

class App extends Component {
  state = {};
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }
  render() {
    return (
      <div>
        <Login />
      </div>
    );
  }
}

export default connect(state => {
  return { posts: state.posts, users: state.users };
})(App);
