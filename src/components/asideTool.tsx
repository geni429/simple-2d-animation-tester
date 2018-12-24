import * as React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router-dom";

import { Header, SubTitle } from "@ui";
import { CreateTarget } from "./createTarget";
import { ROUTE_CREATE, ROUTE_UPDATE } from "@utils";

const mapStateToProps = (state: RootState) => {
  return {
    animations: state.animations
  };
};

// components props
type Props = RouteComponentProps<{}> & ReturnType<typeof mapStateToProps>;

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
  private getSubTitle = (): string => {
    const { pathname } = this.props.location;

    // constants
    const SUB_TITLE_ON_CREATE: string = "Create Target";
    const SUB_TITLE_ON_UPDATE: string = "Update Animation";

    let subTitle: string = "";

    switch (pathname) {
      case ROUTE_CREATE:
        subTitle = SUB_TITLE_ON_CREATE;
        break;
      case ROUTE_UPDATE:
        subTitle = SUB_TITLE_ON_UPDATE;
        break;
    }

    return subTitle;
  };

  private getTool = () => {
    const { pathname } = this.props.location;

    switch (pathname) {
      case ROUTE_CREATE:
        return <CreateTarget />;
      case ROUTE_UPDATE:
        return null;
    }
  };

  public render() {
    return (
      <AsideContainer>
        <Header>Animation Maker</Header>
        <SubTitle>{this.getSubTitle()}</SubTitle>
        {this.getTool()}
      </AsideContainer>
    );
  }
}

export const AsideTool = connect(mapStateToProps)(
  withRouter<Props>(AsideToolComponent)
);
