import * as React from "react";
import { render } from "react-dom";
import { Main } from "./pages";
import { GlobalStyles } from './utils';

const root = document.getElementById("root") as HTMLDivElement;
render(
  <React.Fragment>
    <Main />
    <GlobalStyles />
  </React.Fragment>,
  root
);
