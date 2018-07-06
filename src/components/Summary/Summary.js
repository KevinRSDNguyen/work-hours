import React from "react";

import Aux from "./../../hoc/Auxx/Auxx";
import CostSalesTax from "./CostSalesTax";
import WageAndIncomeTax from "./WageAndIncomeTax";
import WorkTimeSummary from "./WorktimeSummary";

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
          state={state}
          stateSalesTax={stateSalesTax}
          initialCost={initialCost}
          finalCost={finalCost}
        />
        <WageAndIncomeTax hourlyWage={hourlyWage} workHours={workHours} />
        <WorkTimeSummary workHours={workHours} />
      </Aux>
    );
  }
  return <div>{summary}</div>;
};

export default Summary;
