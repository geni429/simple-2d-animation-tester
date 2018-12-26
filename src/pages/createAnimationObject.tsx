import * as React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { DraggableData } from "react-draggable";

import { AsideTool, AnimationTarget } from "@components";
import { FlexBox, Header } from "@ui";
import { setCreateTargetPosition } from "@actions";

const mapStateToProps = (state: RootState) => {
  return {
    animations: state.animations
  };
};

const mapDispatchToProps = {
  setCreateTargetPosition
};

// components props
type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

type State = {
  targetX: number;
  targetY: number;
};

// styled components
const Container = styled(FlexBox)`
  position: relative;
  width: calc(100% - 420px);
  height: 100vh;
  background: #ffffff;
`;

// components
class CreateAnimationObjectComponent extends React.Component<Props, State> {
  public state: State = {
    targetX: 0,
    targetY: 0
  };

  private getTargetPosition = (_: MouseEvent, data: DraggableData) => {
    this.props.setCreateTargetPosition({
      x: data.x,
      y: data.y
    });
  };

  render() {
    const { createTarget } = this.props.animations;
    const { data, options } = createTarget;
    const { fixed } = options;

    return (
      <FlexBox direction="row">
        <AsideTool />
        <Container justifyContent="center" alignItems="center">
          {data ? (
            <AnimationTarget
              isFixed={fixed}
              target={createTarget}
              onDrag={this.getTargetPosition}
            />
          ) : (
            <Header>Create animation object to make your animation!</Header>
          )}
        </Container>
      </FlexBox>
    );
  }
}

export const CreateAnimationObject = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateAnimationObjectComponent);
