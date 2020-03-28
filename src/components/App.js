import React, { Component } from "react";
import { handleInitialData } from "../actions/shared";
import { connect } from "react-redux";

class App extends Component {
  state = {};
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }
  render() {
    return (
      <div>
        <ul>
          {this.props.posts.map(x => (
            <li key={x.id}>{x.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(state => {
  return { posts: state.posts, users: state.users };
})(App);
