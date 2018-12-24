import * as React from "react";
import { render } from "react-dom";
import { Normalize as StyledNormalize } from "styled-normalize";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import { CreateAnimationObject, Main } from "@pages";
import {
  GlobalStyles,
  ROUTE_CREATE,
  ROUTE_UPDATE,
  ROUTE_DEFAULT
} from "@utils";
import { getStore } from "@reducers";

const root = document.getElementById("root") as HTMLDivElement;
render(
  <Provider store={getStore()}>
    <StyledNormalize />
    <Router>
      <Switch>
        <Route
          path={ROUTE_CREATE}
          exact={true}
          component={CreateAnimationObject}
        />
        <Route path={ROUTE_UPDATE} exact={true} component={Main} />
        <Redirect to={ROUTE_DEFAULT} />
      </Switch>
    </Router>
    <GlobalStyles />
  </Provider>,
  root
);
