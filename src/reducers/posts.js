import { ADD_POST, GET_POSTS, GET_POST } from "../types/postsTypes";

export default function posts(state = {}, action) {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, ...action.posts };
    case GET_POST:
      return state.posts.filter(x => x.id == action.id);
    default:
      state;
  }
}
