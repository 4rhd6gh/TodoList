import { combineReducers } from "redux";
import todos from "../pages/sunah/modules/todos";
const rootReducer = combineReducers({
  todos,
});

export default rootReducer;
