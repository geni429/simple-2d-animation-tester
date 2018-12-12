import { action } from "typesafe-actions";
import { SET_ANIMATION_TARGET } from "./constants";

export const setAnimationTarget = (target: string) =>
  action(SET_ANIMATION_TARGET, target);
