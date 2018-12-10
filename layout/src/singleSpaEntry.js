import React from "react";
import ReactDOM from "react-dom";
import Root from "./root.component.js";

import "snowy/dist/styles/index.less";

// Make sure there is a div for us to render into
let el = document.getElementById("root");
if (!el) {
  el = document.createElement("div");
  el.id = "root";
  document.body.appendChild(el);
}

ReactDOM.render(<Root />, el);
