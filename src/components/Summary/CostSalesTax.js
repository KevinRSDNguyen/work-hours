import React from "react";
import numerize from "./../../utility/numerize";

const CostSalesTax = ({ state, stateSalesTax, initialCost, finalCost }) => {
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
