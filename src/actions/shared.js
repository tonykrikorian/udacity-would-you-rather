import { RECEIVE_DATA } from "../types/sharedTypes";
import axios from "axios";

function receiveData(posts) {
  return {
    type: RECEIVE_DATA,
    posts
  };
}

export function handleInitialData() {}
