import React from "react";

const Summary = ({ summaryData }) => {
  let summary = <p>Pease fill out the form for a summary</p>;
  const { stateSalesTax, hourlyWage, initialCost, workHours } = summaryData;

  if (workHours) {
    summary = (
      <p>
        At an initial cost of ${initialCost}, and with an hourly wage of ${
          hourlyWage
        }. It will take you {workHours.toFixed(2)} hours to buy this item.
      </p>
    );
  }
  return <div>{summary}</div>;
};

export default Summary;
