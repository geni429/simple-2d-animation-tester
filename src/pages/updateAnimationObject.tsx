import * as React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { DraggableData } from "react-draggable";

import { AsideTool, AnimationTarget } from "@components";
import { FlexBox } from "@ui";
import { setTargetPosition } from "@actions/animations";

const mapStateToProps = (state: RootState) => {
  return {
    animations: state.animations
  };
};

const mapDispatchToProps = {
  setTargetPosition
};

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps & {};
type State = {};

const Container = styled(FlexBox)`
  width: calc(100% - 420px);
  height: 100vh;
  background: #ffffff;
`;

class UpdateAnimationObjectComponent extends React.Component<Props, State> {
  public state: State = {};

  private getTargetPosition = (_: MouseEvent, data: DraggableData) => {
    this.props.setTargetPosition({
      x: data.x,
      y: data.y
    });
  };

  public render() {
    const { target, options } = this.props.animations;

    if (!target.data) {
      return <Redirect to="/create" />;
    }

    return (
      <FlexBox direction="row">
        <AsideTool />
        <Container justifyContent="center" alignItems="center">
          <AnimationTarget
            isFixed={options.fixed}
            target={target}
            onDrag={this.getTargetPosition}
          />
        </Container>
      </FlexBox>
    );
  }
}

export const UpdateAnimationObject = connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateAnimationObjectComponent);
