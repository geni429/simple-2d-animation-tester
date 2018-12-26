import {
  SET_CREATE_TARGET,
  SET_CREATE_TARGET_INITIAL_OPTIONS,
  SET_CREATE_TARGET_POSITION
} from "@actions";

const initialState: AnimationsState = {
  createTarget: {
    data: "",
    width: 0,
    height: 0,
    x: 0,
    y: 0,
    options: {
      fixed: false
    }
  },
  createdTargets: []
};

export const animations = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_CREATE_TARGET:
      return {
        ...state,
        createTarget: action.payload
      };
    case SET_CREATE_TARGET_INITIAL_OPTIONS:
      return {
        ...state,
        createTarget: {
          ...state.createTarget,
          options: action.payload
        }
      };
    case SET_CREATE_TARGET_POSITION:
      return {
        ...state,
        createTarget: {
          ...state.createTarget,
          x: action.payload.x,
          y: action.payload.y
        }
      };
    default:
      return state;
  }
};
