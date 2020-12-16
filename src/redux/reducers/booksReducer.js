import { BOOKS, LOGOUT } from "../constants";
import initialState from "../store/initialState";

const booksReducer = (state = initialState.books || {}, action) => {
  switch (action.type) {
    case BOOKS:
      return {
        ...state,
        books: action.payload,
      };
    case LOGOUT:
      return {
        isLogged: {},
      };
    default:
      return state;
  }
};
export default booksReducer;
