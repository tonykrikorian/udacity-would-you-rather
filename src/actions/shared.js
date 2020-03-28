import { RECEIVE_DATA } from "../types/sharedTypes";
import axios from "axios";

function receiveData(posts, users) {
  return {
    type: RECEIVE_DATA,
    posts,
    users
  };
}

export function handleInitialData() {
  return dispatch => {
    return Promise.all([
      axios.get("https://jsonplaceholder.typicode.com/posts"),
      axios.get("https://jsonplaceholder.typicode.com/users")
    ]).then(([posts, users]) => {
      dispatch(receiveData(posts, users));
    });
  };
}
