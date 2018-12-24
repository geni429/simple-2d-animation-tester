type FunctionBasedParameter = (
  element: HTMLElement,
  index: number,
  length: number
) => number;

type AnimeCallbackFunction = (anim: anime.AnimeInstance) => void;

type EasingOptions =
  | "linear"
  | "easeInQuad"
  | "easeInCubic"
  | "easeInQuart"
  | "easeInQuint"
  | "easeInSine"
  | "easeInExpo"
  | "easeInCirc"
  | "easeInBack"
  | "easeInElastic"
  | "easeOutQuad"
  | "easeOutCubic"
  | "easeOutQuart"
  | "easeOutQuint"
  | "easeOutSine"
  | "easeOutExpo"
  | "easeOutCirc"
  | "easeOutBack"
  | "easeOutElastic"
  | "easeInOutQuad"
  | "easeInOutCubic"
  | "easeInOutQuart"
  | "easeInOutQuint"
  | "easeInOutSine"
  | "easeInOutExpo"
  | "easeInOutCirc"
  | "easeInOutBack"
  | "easeInOutElastic";
type DirectionOptions = "reverse" | "alternate" | "normal";

interface StyledAnimeComponentProps {
  children?: React.ReactNode;
}

interface StyledAnimeParams {
  loop?: number | boolean;
  autoplay?: boolean;
  direction?: DirectionOptions | string;

  duration?: number | FunctionBasedParameter;
  delay?: number | FunctionBasedParameter;
  elasticity?: number | FunctionBasedParameter;
  round?: number | boolean | FunctionBasedParameter;

  easing?: EasingOptions | string | ReadonlyArray<number>;

  begin?: AnimeCallbackFunction;
  run?: AnimeCallbackFunction;
  update?: AnimeCallbackFunction;
  complete?: AnimeCallbackFunction;
  [AnyAnimatedProperty: string]: any;
}
