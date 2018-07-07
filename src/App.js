import React, { Component } from "react";
import InputForm from "./containers/InputForm/InputForm";
import Summary from "./components/Summary/Summary";
import "./App.css";

import { stateLocalSalesTax } from "./utility/stateLocalSalesTax";
import { hourlyWageAfterIncTax } from "./utility/salaryIncomeTax";

class App extends Component {
  state = {
    state: null,
    stateSalesTax: 0,
    selectedHourly: true, //If set to false then user input their salary
    hourlyWage: null,
    hourlyWageFedIncTax: null,
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
    const hourlyWageFedIncTax = hourlyWageAfterIncTax(hourlyWage);
    const finalCost = initialCost * (1 + stateSalesTax);
    const workHours = finalCost / hourlyWageFedIncTax;
    this.setState({
      hourlyWage,
      initialCost,
      state,
      stateSalesTax,
      hourlyWageFedIncTax,
      finalCost,
      workHours
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
