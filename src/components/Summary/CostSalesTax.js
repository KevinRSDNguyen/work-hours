import React from "react";
import numeral from "numeral";

//Add commas to our numbers
const numerize = amount => {
  return numeral(amount).format("0,0.00");
};

const CostSalesTax = ({ initialCost, state, stateSalesTax, finalCost }) => {
  const stateSalesTaxSummary =
    state === "Custom"
      ? `You chose a custom sales tax rate of ${(stateSalesTax * 100).toFixed(
          2
        )}%.`
      : `You picked
  the state of ${state}, which has an average combined state and local
  sales tax rate of ${(stateSalesTax * 100).toFixed(2)}%. `;

  return (
    <p>
      Your item has an initial cost of ${numerize(initialCost)}.{" "}
      {stateSalesTaxSummary} Therefore after sales tax is added your item now
      costs ${numerize(finalCost)}.
    </p>
  );
};

export default CostSalesTax;
