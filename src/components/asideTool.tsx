import * as React from "react";
import styled from "styled-components";

import { Header } from "../ui";

const AsideContainer = styled.aside`
  width: 420px;
  height: 100vh;
  padding: 20px;
  background: #c8c0fc;
`;

export class AsideTool extends React.Component {
  render() {
    return (
      <AsideContainer>
        <Header>Animation Maker</Header>
      </AsideContainer>
    );
  }
}
