import { SET_TARGET, SET_INITIAL_OPTIONS } from "./constants";
import { createAction } from "./utils";

export const setTarget = (target: string) => {
  return createAction(SET_TARGET, target);
};
export const setInitialOptions = (options: AnimationOptions) => {
  return createAction(SET_INITIAL_OPTIONS, options);
};
