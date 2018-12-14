import * as React from "react";
import styled from "styled-components";

import { AsideTool } from "@components";
import { FlexBox, Header } from "@ui";

// components props
type Props = {};

type State = {};

// styled components
const Container = styled(FlexBox)`
  width: calc(100% - 420px);
  height: 100vh;
  background: #ffffff;
`;

// components
export class CreateAnimation extends React.Component<Props, State> {
  render() {
    return (
      <FlexBox direction="row">
        <AsideTool />
        <Container justifyContent="center" alignItems="center">
          <Header>Create animation object to make your animation!</Header>
        </Container>
      </FlexBox>
    );
  }
}
