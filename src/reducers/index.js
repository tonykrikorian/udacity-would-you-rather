import { combineReducers } from "redux";
import posts from "./posts";
import users from "./users";
import authedUsers from "./authedUsers";

export default combineReducers({ posts, users, authedUsers });
