import { SET_TARGET, SET_INITIAL_OPTIONS } from "@actions/constants";

const initialState: AnimationsState = {
  target: {
    data: "",
    width: 0,
    height: 0
  },
  options: {
    fixed: false
  }
};

export const animations = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_TARGET:
      return {
        ...state,
        target: action.payload
      };
    case SET_INITIAL_OPTIONS:
      return {
        ...state,
        options: action.payload
      };
    default:
      return state;
  }
};
