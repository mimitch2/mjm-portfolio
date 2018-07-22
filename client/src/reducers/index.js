import {combineReducers} from "redux";

function url(state = "", action) {
  if (action.type === "SET_URL") {
    return action.value;
  }
  return state;
}

function cssShow(state = "", action) {
  if (action.type === "SET_CSS") {
    return action.value;
  }
  return state;
}

// function favorites(state = [], action) {
//   if (action.type === "FAVORITES_LOADED") {
//     return action.value;
//   }
//   return state;
// }


const rootReducer = combineReducers({
  url, cssShow
});

export default rootReducer;
