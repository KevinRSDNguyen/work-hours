import React, { Component } from "react";
import InputForm from "./containers/InputForm/InputForm";
import Summary from "./components/Summary/Summary";
import "./App.css";

import { stateLocalSalesTax } from "./utility/stateLocalSalesTax";

class App extends Component {
  state = {
    state: null,
    stateSalesTax: 0,
    hourlyWage: null,
    initialCost: null,
    finalCost: null,
    workHours: null
  };
  fetchData = ({ hourlyWage, initialCost, state, customSalesTax }) => {
    let stateSalesTax;
    if (state === "Custom") {
      stateSalesTax = customSalesTax / 100;
    } else {
      stateSalesTax = stateLocalSalesTax[state];
    }
    const finalCost = initialCost * (1 + stateSalesTax);
    const workHours = finalCost / hourlyWage;
    this.setState({
      hourlyWage,
      initialCost,
      state,
      workHours,
      stateSalesTax,
      finalCost
    });
  };
  render() {
    return (
      <div className="container">
        <h1>Welcome to the App</h1>
        <InputForm fetchData={this.fetchData} />
        <Summary summaryData={this.state} />
      </div>
    );
  }
}

export default App;
