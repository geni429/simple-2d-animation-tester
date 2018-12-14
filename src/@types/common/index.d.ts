interface ObjectType<T> {
  [key: string]: T;
}

interface AnimationTarget {
  data: string;
  width: number;
  height: number;
}

interface AnimationOptions {
  fixed: boolean;
  transform?: boolean;
  fade?: boolean;
}

type AnimationOptionKeys = "fixed" | "transform" | "fade";
