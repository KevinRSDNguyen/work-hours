import React from "react";
import numeral from "numeral";

import Aux from "./../../hoc/Auxx/Auxx";
import CostSalesTax from "./CostSalesTax";
import WorkTimeSummary from "./worktimeSummary";

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

  let summary = <p>Pease fill out the form for a summary</p>;

  if (workHours) {
    summary = (
      <Aux>
        <CostSalesTax
          initialCost={initialCost}
          state={state}
          stateSalesTax={stateSalesTax}
          finalCost={finalCost}
        />
        <p>
          With an hourly wage of ${numerize(hourlyWage)}, it will take you{" "}
          {numerize(workHours)} hours to buy this item.
        </p>

        <WorkTimeSummary workHours={workHours} />
      </Aux>
    );
  }
  return <div>{summary}</div>;
};

export default Summary;
