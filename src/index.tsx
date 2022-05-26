import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Settings } from "./types";

function Autoplay(settings: Settings) {
  const ref = React.createRef<any>();

  const root = document.createElement("div");
  root.id = "root-autoplay";

  const element = React.createElement(App, {
    props: { settings, container: root },
    ref,
  });

  ReactDOM.render(element, root);

  return ref.current;
}

export default Autoplay;
