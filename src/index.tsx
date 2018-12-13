import * as React from "react";
import { render } from "react-dom";
import { Normalize as StyledNormalize } from "styled-normalize";
import { Provider } from "react-redux";

import { CreateAnimation } from "./pages";
import { GlobalStyles } from "./utils";
import { getStore } from "./reducers";

const root = document.getElementById("root") as HTMLDivElement;
render(
  <Provider store={getStore()}>
    <StyledNormalize />
    <CreateAnimation />
    <GlobalStyles />
  </Provider>,
  root
);
