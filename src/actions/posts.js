import { GET_POST, GET_POSTS, ADD_POST } from "../types/postsTypes";

export function getPosts(posts) {
  return {
    type: GET_POSTS,
    posts
  };
}

export function getPost(id) {
  return {
    type: GET_POST,
    id
  };
}

export function addPost(post) {
  return {
    type: ADD_POST,
    post
  };
}
