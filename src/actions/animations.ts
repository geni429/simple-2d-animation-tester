import {
  SET_TARGET,
  SET_INITIAL_OPTIONS,
  SET_TARGET_POSITION
} from "./constants";
import { createAction } from "./utils";

export const setTarget = (target: AnimationTarget) => {
  return createAction(SET_TARGET, target);
};

export const setInitialOptions = (options: AnimationOptions) => {
  return createAction(SET_INITIAL_OPTIONS, options);
};

export const setTargetPosition = (position: TargetPosition) => {
  return createAction(SET_TARGET_POSITION, position);
};
