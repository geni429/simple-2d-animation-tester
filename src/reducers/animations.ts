import { SET_TARGET } from "../actions/constants";
import { AnimationsState } from "./states";

const initialState: AnimationsState = {
  target: ""
};

export const animations = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_TARGET:
      return {
        ...state,
        target: action.payload
      };
    default:
      return state;
  }
};
