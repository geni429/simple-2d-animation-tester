import {
  SET_TARGET,
  SET_INITIAL_OPTIONS,
  SET_TARGET_POSITION
} from "@actions/constants";

const initialState: AnimationsState = {
  target: {
    data: "",
    width: 0,
    height: 0,
    x: 0,
    y: 0
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
    case SET_TARGET_POSITION:
      return {
        ...state,
        target: {
          ...state.target,
          x: action.payload.x,
          y: action.payload.y
        }
      };
    default:
      return state;
  }
};
