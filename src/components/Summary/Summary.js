import React from "react";
import numeral from "numeral";

import Aux from "./../../hoc/Auxx/Auxx";
import WorkTimeSummary from "./worktimeSummary";

//Add commas to our numbers
const numerize = amount => {
  return numeral(amount).format("0,0.00");
};

const Summary = ({ summaryData }) => {
  const {
    stateSalesTax,
    hourlyWage,
    initialCost,
    workHours,
    state,
    finalCost
  } = summaryData;

  const stateSalesTaxSummary =
    state === "Custom"
      ? `You chose a custom sales tax rate of ${(stateSalesTax * 100).toFixed(
          2
        )}%.`
      : `You picked
  the state of ${state}, which has an average combined state and local
  sales tax rate of ${(stateSalesTax * 100).toFixed(2)}%. `;

  let summary = <p>Pease fill out the form for a summary</p>;

  if (workHours) {
    summary = (
      <Aux>
        <p>
          Your item has an initial cost of ${numerize(initialCost)}.{" "}
          {stateSalesTaxSummary} Therefore after sales tax is added your item
          now costs ${numerize(finalCost)}. With an hourly wage of ${numerize(
            hourlyWage
          )}, it will take you {numerize(workHours)} hours to buy this item.
        </p>

        <WorkTimeSummary workHours={workHours} />
      </Aux>
    );
  }
  return <div>{summary}</div>;
};

export default Summary;
