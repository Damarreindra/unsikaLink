import { combineReducers } from "redux";
import UserReducer from "./user";
import CommentReducer from "./comment"
import ImageReducer from "./img"

export default combineReducers({
    UserReducer, CommentReducer, ImageReducer
})