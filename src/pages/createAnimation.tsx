import * as React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { AsideTool } from "@components";
import { FlexBox, Header } from "@ui";
import { getSizeWithUnit } from "@utils";

const mapStateToProps = (state: RootState) => {
  return {
    animations: state.animations
  };
};

// components props
type Props = ReturnType<typeof mapStateToProps>;

type State = {};

// styled components
const Container = styled(FlexBox)`
  position: relative;
  width: calc(100% - 420px);
  height: 100vh;
  background: #ffffff;
`;

// styled-components
const TargetContainer = styled.div`
  text-align: center;
`;
const Target = styled.img``;
const TargetFixed = styled.div<{ width: number; height: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${props => getSizeWithUnit(props.width + 50)};
  height: ${props => getSizeWithUnit(props.height + 50)};
  border: 2px dashed #000;

  &::after {
    content: "Target will fixed on background.";
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(calc(100% + 20px), -50%);
    white-space: pre;
    font-size: 24px;
  }
`;

// components
class CreateAnimationComponent extends React.Component<Props, State> {
  render() {
    const { target, options } = this.props.animations;

    return (
      <FlexBox direction="row">
        <AsideTool />
        <Container justifyContent="center" alignItems="center">
          {target.data ? (
            <TargetContainer>
              <Target src={target.data} />
              {options.fixed ? (
                <TargetFixed width={target.width} height={target.height} />
              ) : (
                void 0
              )}
            </TargetContainer>
          ) : (
            <Header>Create animation object to make your animation!</Header>
          )}
        </Container>
      </FlexBox>
    );
  }
}

export const CreateAnimation = connect(mapStateToProps)(
  CreateAnimationComponent
);
