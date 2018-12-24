import * as React from "react";
import styled, { SimpleInterpolation } from "styled-components";
import anime from "animejs";

export const styledAnime = (
  TargetComponent: keyof JSX.IntrinsicElements | React.ComponentType<any>
) => (
  style: TemplateStringsArray | NonNullable<SimpleInterpolation>,
  ...interpolations: SimpleInterpolation[]
) => (config: StyledAnimeParams) => {
  const StyledComponent = styled(TargetComponent)`
    ${style}
    ${interpolations}
  `;

  return class extends React.Component<StyledAnimeComponentProps> {
    targetRef = React.createRef<HTMLElement>();

    componentDidMount() {
      anime({
        targets: this.targetRef.current,
        ...config
      });
    }

    render() {
      return (
        <StyledComponent ref={this.targetRef}>
          {this.props.children}
        </StyledComponent>
      );
    }
  };
};
