interface ObjectType<T> {
  [key: string]: T;
}

interface AnimationOptions {
  fixed: boolean;
  transform?: boolean;
  fade?: boolean;
}

interface AnimationTarget {
  data: string;
  width: number;
  height: number;
  x: number;
  y: number;
  options: AnimationOptions;
}

interface Option {
  key: string;
  name: string;
  disabled: boolean;
  defaultValue?: boolean;
}

interface TargetPosition {
  x: number;
  y: number;
}

type AnimationOptionKeys = "fixed" | "transform" | "fade";
