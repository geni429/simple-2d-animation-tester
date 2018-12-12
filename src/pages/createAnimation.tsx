import * as React from "react";
import styled from "styled-components";

import { AsideTool } from "../components";
import { FlexBox } from "../ui";

type Props = {};
type State = {};

const Container = styled.div`
  width: calc(100% - 420px);
  height: 500px;
  background: #ffffff;
`;

export class CreateAnimation extends React.Component<Props, State> {
  render() {
    return (
      <FlexBox direction="row">
        <AsideTool />
        <Container>
          <></>
        </Container>
      </FlexBox>
    );
  }
}
