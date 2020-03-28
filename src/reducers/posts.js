import { ADD_POST, GET_POSTS, GET_POST } from "../types/postsTypes";
import { RECEIVE_DATA } from "../types/sharedTypes";

export default function posts(state = [], action) {
  switch (action.type) {
    case RECEIVE_DATA:
      return action.posts.data;
    case GET_POST:
      return state.posts.filter(x => x.id == action.id);
    default:
      return state;
  }
}
