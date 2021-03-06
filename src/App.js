import React, { Component } from "react";
import Aux from "./hoc/Auxx/Auxx";
import InputForm from "./containers/InputForm/InputForm";
import About from "./components/About/About";
import Summary from "./components/Summary/Summary";
import "./App.css";

import { stateLocalSalesTax } from "./utility/stateLocalSalesTax";
import { effectiveFedIncTax } from "./utility/salaryIncomeTax";

class App extends Component {
  state = {
    state: null,
    stateSalesTax: 0,
    selectedHourly: true, //If set to false then user input their salary
    hourlyWage: null,
    hourlyWageFedIncTax: null,
    fedIncTax: null,
    initialCost: null,
    finalCost: null,
    workHours: null
  };
  fetchData = data => {
    const {
      selectedHourly,
      salary,
      hourlyWage,
      initialCost,
      state,
      customSalesTax
    } = data;
    let stateSalesTax;
    if (state === "Custom") {
      stateSalesTax = customSalesTax / 100;
    } else {
      stateSalesTax = stateLocalSalesTax[state];
    }
    const fedIncTax = effectiveFedIncTax(salary);
    const finalCost = initialCost * (1 + stateSalesTax);
    const hourlyWageFedIncTax = hourlyWage * (1 - fedIncTax);
    const workHours = finalCost / hourlyWageFedIncTax;
    this.setState({
      selectedHourly,
      salary,
      hourlyWage,
      hourlyWageFedIncTax,
      initialCost,
      state,
      stateSalesTax,
      fedIncTax,
      finalCost,
      workHours
    });
  };
  render() {
    return (
      <Aux>
        <div className="dark-overlay" />
        <div className="container text-white">
          <h1 className="text-center my-2">Work Hours App</h1>
          <div className="row">
            <div className="col-md-9 mx-auto">
              <InputForm fetchData={this.fetchData} />

              {this.state.workHours ? (
                <Summary summaryData={this.state} />
              ) : (
                <About />
              )}
            </div>
          </div>
        </div>
      </Aux>
    );
  }
}

export default App;
