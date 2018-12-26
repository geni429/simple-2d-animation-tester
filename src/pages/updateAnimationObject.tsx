import * as React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { DraggableData } from "react-draggable";

import { AsideTool, AnimationTarget } from "@components";
import { FlexBox } from "@ui";
import { setCreateTargetPosition } from "@actions";

const mapStateToProps = (state: RootState) => {
  return {
    animations: state.animations
  };
};

const mapDispatchToProps = {
  setCreateTargetPosition
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
    this.props.setCreateTargetPosition({
      x: data.x,
      y: data.y
    });
  };

  public render() {
    const { createTarget } = this.props.animations;
    const { data, options } = createTarget;
    const { fixed } = options;

    if (!data) {
      return <Redirect to="/create" />;
    }

    return (
      <FlexBox direction="row">
        <AsideTool />
        <Container justifyContent="center" alignItems="center">
          <AnimationTarget
            isFixed={fixed}
            target={createTarget}
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
