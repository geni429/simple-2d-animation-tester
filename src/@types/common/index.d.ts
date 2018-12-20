interface ObjectType<T> {
  [key: string]: T;
}

interface AnimationTarget {
  data: string;
  width: number;
  height: number;
  x: number;
  y: number;
}

interface Option {
  key: string;
  name: string;
  disabled: boolean;
  defaultValue?: boolean;
}

interface AnimationOptions {
  fixed: boolean;
  transform?: boolean;
  fade?: boolean;
}

type AnimationOptionKeys = "fixed" | "transform" | "fade";
