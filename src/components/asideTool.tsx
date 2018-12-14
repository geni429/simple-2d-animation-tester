import * as React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { Header, SubTitle } from "../ui";
import { CreateTarget } from "./createTarget";

const mapStateToProps = (state: RootState) => {
  return {
    animations: state.animations
  };
};

// components props
type Props = ReturnType<typeof mapStateToProps>;

type State = {};

// styled components
const AsideContainer = styled.aside`
  width: 420px;
  height: 100vh;
  padding: 20px;
  background: #c8c0fc;
`;

// components
class AsideToolComponent extends React.Component<Props, State> {
  render() {
    console.log("animations", this.props.animations);
    return (
      <AsideContainer>
        <Header>Animation Maker</Header>
        <SubTitle>Create Target</SubTitle>
        <CreateTarget />
      </AsideContainer>
    );
  }
}

export const AsideTool = connect(mapStateToProps)(AsideToolComponent);
