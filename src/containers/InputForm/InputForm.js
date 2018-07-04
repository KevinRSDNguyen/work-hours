import React, { Component } from "react";

class InputForm extends Component {
  state = {
    stateSalesTax: 0,
    initialCost: null,
    hourlyWage: null,
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
  onChange = e => {
    this.setState({
      [e.target.name]: +e.target.value
    });
  };
  render() {
    return (
      <form onSubmit={this.onSubmitHandler}>
        <div className="form-group">
          <input
            className="form-control"
            type="number"
            placeholder="Enter in the initial cost of the product"
            name="initialCost"
            onChange={this.onChange}
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="number"
            placeholder="Enter how much you make per hour"
            name="hourlyWage"
            onChange={this.onChange}
          />
        </div>
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
