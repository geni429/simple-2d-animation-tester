import * as React from "react";
import styled, { SimpleInterpolation, css } from "styled-components";
import anime from "animejs";

export const styledAnime = function styledAnime(
  TargetComponent: keyof JSX.IntrinsicElements | React.ComponentType<any>
) {
  return function(
    style: TemplateStringsArray | NonNullable<SimpleInterpolation>,
    ...interpolations: SimpleInterpolation[]
  ) {
    return function(config: StyledAnimeParams) {
      const StyledComponent = styled(TargetComponent)`
        ${css(style, ...interpolations)};
      `;

      return class extends React.PureComponent<StyledAnimeComponentProps> {
        private targetRef = React.createRef<HTMLElement>();
        private animation: anime.AnimeInstance | undefined = void 0;

        public constructor(props: StyledAnimeComponentProps) {
          super(props);

          this.isPlayed = this.isPlayed.bind(this);
          this.play = this.play.bind(this);
          this.pause = this.pause.bind(this);
        }

        private isPlayed(): boolean {
          const { played } = this.props;

          return played !== void 0 ? played : true;
        }

        private play(): void {
          this.animation && this.animation.play();
        }

        private pause(): void {
          this.animation && this.animation.pause();
        }

        public componentDidMount() {
          const props = { ...this.props };

          delete props.children;
          delete props.played;

          this.animation = anime({
            targets: this.targetRef.current,
            autoplay: false,
            ...config,
            ...props
          });

          this.isPlayed() ? this.play() : this.pause();
        }

        public render() {
          if (this.animation !== void 0) {
            this.isPlayed() ? this.play() : this.pause();
          }

          return (
            <StyledComponent ref={this.targetRef}>
              {this.props.children}
            </StyledComponent>
          );
        }
      };
    };
  };
};
