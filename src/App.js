import React, { Component } from "react";
import { KintoneRestAPIClient } from "@kintone/rest-api-client";
import { RadioButton } from "@kintone/kintone-ui-component";
import "./App.css";

class App extends Component{ constructor(opts) {
    super(opts);
    let items = [
      {
        label: "顧客",
        value: "client",
        isDisabled: false
      },
      {
        label: "スポット",
        value: "spot",
        isDisabled: false
      }
    ];
    this.state = {
      items: items,
      value: "client"
    };
  }

  render() {
    return (
      <div className="kintone-UI">
        <RadioButton
          name="radio"
          items={this.state.items}
          value={this.state.value}
          onChange={value => {
            this.setState({ value });
            this.myOnChange(value);
          }}
        />
      </div>
    );
  }

  myOnChange = val => {
    console.log(val);
    kintone.app.record.setFieldShown('client', false);
    kintone.app.record.setFieldShown('spot', false);
    if (val === 'client') {
      kintone.app.record.setFieldShown('client', true);
    } else {
      kintone.app.record.setFieldShown('spot', true);
    }
  };
}

export default App;