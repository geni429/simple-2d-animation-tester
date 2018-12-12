import * as React from "react";
import { render } from "react-dom";
import { CreateAnimation } from "./pages";
import { GlobalStyles } from "./utils";

const root = document.getElementById("root") as HTMLDivElement;
render(
  <React.Fragment>
    <CreateAnimation />
    <GlobalStyles />
  </React.Fragment>,
  root
);
