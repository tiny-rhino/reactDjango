import * as React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import Index from "../pages";

ReactDOM.render(
  <AppContainer>
    <Index {...props} />
  </AppContainer>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}
