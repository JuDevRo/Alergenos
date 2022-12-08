import { SET_ALLE } from "../actions/types";

const initialState = {
  alle: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALLE:
      return { ...state, alle: action.payload };
    default:
      return state;
  }
};
