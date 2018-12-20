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

import { CreateAnimationObject } from "@pages";
import { GlobalStyles } from "@utils";
import { getStore } from "@reducers";

const root = document.getElementById("root") as HTMLDivElement;
render(
  <Provider store={getStore()}>
    <StyledNormalize />
    <Router>
      <Switch>
        <Route path="/create" exact={true} component={CreateAnimationObject} />
        <Redirect to="/create" />
      </Switch>
    </Router>
    <GlobalStyles />
  </Provider>,
  root
);
