import React from "react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import TagManager from "react-gtm-module";
import { hydrate, render } from "react-dom";

const tagManagerArgs = {
  gtmId: "GTM-NKWBW9G",
};

TagManager.initialize(tagManagerArgs);

const APP = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(APP, rootElement);
} else {
  render(APP, rootElement);
}
