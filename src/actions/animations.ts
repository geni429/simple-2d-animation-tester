import { SET_TARGET, SET_TARGET_SUCCESS } from "./constants";
import { createAction } from "./utils";

export const setTarget = (target: string) => {
  console.log("set target");
  return createAction(SET_TARGET, target);
};

export const setTargetSuccess = (payload: any) => {
  return createAction(SET_TARGET_SUCCESS, payload);
};
