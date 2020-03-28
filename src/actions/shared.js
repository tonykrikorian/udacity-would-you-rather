import { RECEIVE_DATA } from "../types/sharedTypes";
import axios from "axios";

function receiveData(posts) {
  return {
    type: RECEIVE_DATA,
    posts
  };
}

export function handleInitialData() {
  return dispatch => {
    return Promise.all([
      axios.get("https://jsonplaceholder.typicode.com/posts")
    ]).then(([posts]) => {
      dispatch(receiveData(posts));
    });
  };
}
