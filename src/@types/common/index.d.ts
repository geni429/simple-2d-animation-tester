interface ObjectType<T> {
  [key: string]: T;
}

interface AnimationOptions {
  fixed: boolean;
  transform?: boolean;
  fade?: boolean;
}

type AnimationOptionKeys = "fixed" | "transform" | "fade";
