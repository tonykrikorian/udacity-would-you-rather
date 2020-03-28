import { RECEIVE_DATA } from "../types/sharedTypes";
import axios from "axios";
import { _getUsers } from "../utils/_DATA";

function receiveData(posts, users) {
  console.log(users);
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
      _getUsers()
    ]).then(([posts, users]) => {
      dispatch(receiveData(posts, users));
    });
  };
}
