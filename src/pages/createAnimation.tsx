import * as React from "react";
import styled from "styled-components";

import { AsideTool } from "../components";
import { FlexBox } from "../ui";

// components props
type Props = {};

type State = {};

// styled components
const Container = styled.div`
  width: calc(100% - 420px);
  height: 500px;
  background: #ffffff;
`;

// components
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
