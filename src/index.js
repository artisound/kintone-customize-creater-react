import React from "react";
import ReactDOM from "react-dom";
import { KintoneRestAPIClient } from "@kintone/rest-api-client";
import App from "./App.js";

kintone.events.on(['app.record.create.show', 'app.record.edit.show'], event => {
  console.log(event)
  console.log(kintone.app.record.getId())
  kintone.app.record.setFieldShown('client', true);
  kintone.app.record.setFieldShown('spot', false);
  // const div_app = document.querySelector('#app');
  const radio = kintone.app.record.getSpaceElement('radio_space');
  console.log(radio)
  // const head = kintone.app.record.getHeaderMenuSpaceElement();
  ReactDOM.render(<App />,  radio);
});