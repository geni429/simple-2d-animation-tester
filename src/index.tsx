import * as React from "react";
import { render } from "react-dom";
import { Normalize as StyledNormalize } from "styled-normalize";

import { CreateAnimation } from "./pages";
import { GlobalStyles } from "./utils";

const root = document.getElementById("root") as HTMLDivElement;
render(
  <React.Fragment>
    <StyledNormalize />
    <CreateAnimation />
    <GlobalStyles />
  </React.Fragment>,
  root
);
