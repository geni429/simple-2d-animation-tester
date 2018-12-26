import {
  SET_CREATE_TARGET,
  SET_CREATE_TARGET_INITIAL_OPTIONS,
  SET_CREATE_TARGET_POSITION
} from "./constants";
import { createAction } from "./utils";

export const setCreateTarget = (target: AnimationTarget) => {
  return createAction(SET_CREATE_TARGET, target);
};

export const setCreateTargetInitialOptions = (options: AnimationOptions) => {
  return createAction(SET_CREATE_TARGET_INITIAL_OPTIONS, options);
};

export const setCreateTargetPosition = (position: TargetPosition) => {
  return createAction(SET_CREATE_TARGET_POSITION, position);
};
