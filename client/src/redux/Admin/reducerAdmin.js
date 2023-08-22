import { GET_ALL_ADMIN } from "./ActionAdmin/getAllAdmin";

const initialState = {
  admin: [],
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_ADMIN:
      return {
        ...state,
        admin: action.payload,
      };

    default:
      return state;
  }
};

export default adminReducer;
