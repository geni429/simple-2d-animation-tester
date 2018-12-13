import * as React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { Header, SubTitle } from "../ui";
import { CreateTarget } from "./createTarget";
import { RootState } from "../reducers/states";

const mapStateToProps = (state: RootState) => {
  return {
    animations: state.animations
  };
};

type Props = ReturnType<typeof mapStateToProps>;
type State = {};

const AsideContainer = styled.aside`
  width: 420px;
  height: 100vh;
  padding: 20px;
  background: #c8c0fc;
`;

class AsideToolComponent extends React.Component<Props, State> {
  render() {
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
