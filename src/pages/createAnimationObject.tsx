import * as React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { DraggableData } from "react-draggable";

import { AsideTool, AnimationTarget } from "@components";
import { FlexBox, Header } from "@ui";
import { setTargetPosition } from "@actions/animations";

const mapStateToProps = (state: RootState) => {
  return {
    animations: state.animations
  };
};

const mapDispatchToProps = {
  setTargetPosition
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
    this.props.setTargetPosition({
      x: data.x,
      y: data.y
    });
  };

  render() {
    const { target, options } = this.props.animations;

    return (
      <FlexBox direction="row">
        <AsideTool />
        <Container justifyContent="center" alignItems="center">
          {target.data ? (
            <AnimationTarget
              isFixed={options.fixed}
              target={target}
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
