import * as React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { AsideTool } from "@components";
import { FlexBox, Header } from "@ui";

const mapStateToProps = (state: RootState) => {
  return {
    animations: state.animations
  };
};

// styled components props
type TargetContainerProps = {
  isFixed: boolean;
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

const TargetContainer = styled.div<TargetContainerProps>`
  position: relative;
  text-align: center;
  border-width: ${props => (props.isFixed ? `5px` : `0`)};
  border-style: dotted;
  border-color: #000;

  &::after {
    content: "Target will fixed on background.";
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(calc(100% + 20px), -50%);
    white-space: pre;
    font-size: ${props => (props.isFixed ? "22px" : "0")};
    font-weight: 100;
  }
`;

const Target = styled.img`
  padding: 20px;
`;

// components
class CreateAnimationComponent extends React.Component<Props, State> {
  render() {
    const { target, options } = this.props.animations;
    console.log(options);

    return (
      <FlexBox direction="row">
        <AsideTool />
        <Container justifyContent="center" alignItems="center">
          {target.data ? (
            <TargetContainer isFixed={options.fixed}>
              <Target src={target.data} />
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
