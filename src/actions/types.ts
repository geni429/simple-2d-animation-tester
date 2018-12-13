export type Action<T extends string> = {
  type: T;
};
export type ActionWithPayload<T extends string, P> = Action<T> & {
  payload: P;
};
