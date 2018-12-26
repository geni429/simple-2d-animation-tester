interface AnimationsState {
  createTarget: AnimationTarget & {
    options: AnimationOptions;
  };
  createdTargets: Array<AnimationTarget>;
}

interface RootState {
  animations: AnimationsState;
}
