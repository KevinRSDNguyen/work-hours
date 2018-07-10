import React, { Component } from "react";
import { states } from "./../../utility/stateLocalSalesTax";
import {
  salaryToHourly,
  hourlyToSalary
} from "./../../utility/salaryIncomeTax";
import isInvalid from "./../../utility/isInvalid";

class InputForm extends Component {
  state = {
    state: "California",
    customSalesTax: 0,
    initialCost: "",
    hourlyWage: "",
    salary: "",
    selectedHourly: true, //If set to false then user input their salary
    error: ""
  };
  onSubmitHandler = e => {
    e.preventDefault();
    const invalid = isInvalid(this.state);
    if (invalid) {
      this.setState({ error: invalid });
      return;
    }
    this.setState(
      prevState => {
        return {
          error: "",
          hourlyWage: prevState.selectedHourly
            ? prevState.hourlyWage
            : salaryToHourly(prevState.salary),
          salary: prevState.selectedHourly
            ? hourlyToSalary(prevState.hourlyWage)
            : prevState.salary
        };
      },
      () => {
        this.props.fetchData(this.state);
      }
    );
  };
  onAmountChange = e => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState({ [e.target.name]: amount });
    }
  };
  onCustomSalesTaxChange = e => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState({ [e.target.name]: amount / 100 });
    }
  };
  onSelectChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onHourlyOrSalarySelectChange = e => {
    const bool = e.target.value === "true" ? true : false;
    this.setState({
      [e.target.name]: bool
    });
  };
  render() {
    const selectOptions = states.map(state => {
      return (
        <option key={state} value={state}>
          {state}
        </option>
      );
    });

    const customSalesTaxInput =
      this.state.state === "Custom" ? (
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="Enter a custom sales tax."
            name="customSalesTax"
            value={this.state.customSalesTax}
            onChange={this.onAmountChange}
          />
          <small className="form-text text-muted">
            Enter your custom sales tax. Example: 8.75 for 8.75%
          </small>
        </div>
      ) : null;

    return (
      <form onSubmit={this.onSubmitHandler}>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="Enter in the initial cost of the product"
            name="initialCost"
            value={this.state.initialCost}
            onChange={this.onAmountChange}
          />
        </div>

        <div className="form-row">
          <div className="form-group col-md-10">
            <input
              className="form-control"
              type="text"
              placeholder={
                this.state.selectedHourly
                  ? "Enter how much you make per hour"
                  : "Enter your yearly salary"
              }
              name={this.state.selectedHourly ? "hourlyWage" : "salary"}
              value={
                this.state.selectedHourly
                  ? this.state.hourlyWage
                  : this.state.salary
              }
              onChange={this.onAmountChange}
            />
          </div>
          <div className="form-group col-md-2">
            <select
              className="custom-select"
              onChange={this.onHourlyOrSalarySelectChange}
              value={this.state.selectedHourly}
              name="selectedHourly"
            >
              <option value={false}>Salary</option>
              <option value={true}>Hourly Wage</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <select
            className="custom-select"
            onChange={this.onSelectChange}
            name="state"
            value={this.state.state}
          >
            {selectOptions}
          </select>
          <small className="form-text text-muted">
            Select a State to find your State and Local Sales Tax. Or select
            custom to input your own.
          </small>
        </div>

        {customSalesTaxInput}

        {this.state.error && (
          <div className="alert alert-danger" role="alert">
            {this.state.error}
          </div>
        )}
        <input type="submit" value="Submit" className="btn btn-info mt-2" />
      </form>
    );
  }
}

export default InputForm;
