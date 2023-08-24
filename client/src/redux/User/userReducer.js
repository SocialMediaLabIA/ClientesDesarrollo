import { GET_ALL_USER } from "./ActionUser/getAllUser";
import { GET_USER_BY_LOGIN } from "./ActionUser/getUserByLogin";
import {GET_PROGRESS_NUMBER} from "./ActionUser/setProgressUser"

const initialState = {
  users: [],
  user: [],
  progressNumber: 0,
};

const userReducer = (state = initialState, action) => {
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

    default:
      return state;
  }
};

export default userReducer;
