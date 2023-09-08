import { GET_ALL_USER } from "./User/ActionUser/getAllUser";
import { GET_USER_BY_LOGIN } from "./User/ActionUser/getUserByLogin";
import { GET_PROGRESS_NUMBER } from "./User/ActionUser/getProgressUser";
import { GET_USER_BY_ID } from "./User/ActionUser/getUserById";
import { GET_ALL_PAGES } from "./Pages/ActionPage/getAllPage";

const initialState = {
  users: [],
  user: [],
  progressNumber: 0,
  userById: [],

  // Pages

  pages: [],
};

const allReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USER:
      return {
        ...state,
        users: action.payload,
      };
    case GET_USER_BY_LOGIN:
      return {
        ...state,
        user: action.payload,
      };
    case GET_PROGRESS_NUMBER:
      return {
        ...state,
        progressNumber: action.payload,
      };
    case GET_USER_BY_ID:
      return {
        ...state,
        userById: action.payload,
      };

    // Pages
    case GET_ALL_PAGES:
      return {
        ...state,
        pages: action.payload,
      };

    default:
      return state;
  }
};

export default allReducer;
