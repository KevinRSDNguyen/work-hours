import React, { Component } from "react";
import InputForm from "./containers/InputForm/InputForm";
import Summary from "./components/Summary/Summary";
import "./App.css";

class App extends Component {
  state = {
    stateSalesTax: 0,
    hourlyWage: null,
    initialCost: null,
    workHours: null
  };
  fetchData = ({ initialCost, hourlyWage }) => {
    const workHours = initialCost / hourlyWage;
    this.setState({ hourlyWage, initialCost, workHours });
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
