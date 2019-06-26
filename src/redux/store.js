import { createStore, combineReducers, applyMiddleware } from "redux"
import { ADD_TO_CART, DELETE_FROM_CART, GET_COURSE_LIST } from "./actions";
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk";

const initialStore = {
    cart: []
}

const initialCourses = {
  courses: []
}


const cartReducer = (state = initialStore, { type, id }) => {
  if(type === ADD_TO_CART) {
    if(state.cart.find(a => a === id)) return state
    return {
      ...state,
      cart: state.cart.concat(id)
    }
  }
  if(type === DELETE_FROM_CART) {
    return {
      ...state,
      cart: state.cart.filter(c => c !== id)
    }
  }
  return state
}

const coursesReducer = (state = initialCourses, action) => {
  if (action.type === GET_COURSE_LIST) {
    return {
      ...state,
      courses: action.courses
    }
  }
  return state
}


export default createStore(combineReducers({cartReducer, coursesReducer}), composeWithDevTools(applyMiddleware(thunk)))