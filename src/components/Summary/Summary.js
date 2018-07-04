import React from "react";
import numeral from "numeral";

//Add commas to our numbers
const numerize = amount => {
  return numeral(amount).format("0,0.00");
};

const Summary = ({ summaryData }) => {
  let summary = <p>Pease fill out the form for a summary</p>;
  const {
    stateSalesTax,
    hourlyWage,
    initialCost,
    workHours,
    state,
    finalCost
  } = summaryData;

  const stateSalesTaxSummary =
    state === "None"
      ? null
      : `You picked
  the state of ${state}, which has an average combined state and local
  sales tax rate of ${stateSalesTax}. Therefore after sales tax is added your item now
  costs $${numerize(finalCost)}.`;

  if (workHours) {
    summary = (
      <p>
        Your item has an initial cost of ${numerize(initialCost)}.{" "}
        {stateSalesTaxSummary} With an hourly wage of ${numerize(hourlyWage)},
        it will take you {numerize(workHours)} hours to buy this item.
      </p>
    );
  }
  return <div>{summary}</div>;
};

export default Summary;
