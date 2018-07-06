import React, { Component } from "react";
import { states } from "./../../utility/stateLocalSalesTax";

class InputForm extends Component {
  state = {
    state: "California",
    customSalesTax: 0,
    initialCost: "",
    hourlyWage: "",
    error: ""
  };
  onSubmitHandler = e => {
    e.preventDefault();
    if (!this.state.initialCost || !this.state.hourlyWage) {
      return this.setState({ error: "All fields must be filled out" });
    }
    this.setState({ error: "" });
    this.props.fetchData(this.state);
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
      state: e.target.value
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

        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="Enter how much you make per hour"
            name="hourlyWage"
            value={this.state.hourlyWage}
            onChange={this.onAmountChange}
          />
        </div>

        <div className="form-group">
          <select
            className="custom-select"
            onChange={this.onSelectChange}
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
