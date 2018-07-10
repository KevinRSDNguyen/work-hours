import React from "react";

import CostSalesTax from "./CostSalesTax";
import WageAndIncomeTax from "./WageAndIncomeTax";
import WorkTimeSummary from "./WorktimeSummary";

const Summary = ({ summaryData }) => {
  const {
    selectedHourly,
    salary,
    stateSalesTax,
    hourlyWage,
    hourlyWageFedIncTax,
    fedIncTax,
    initialCost,
    workHours,
    state,
    finalCost
  } = summaryData;

  let summary = (
    <p className="text-center py-5">
      Please fill out the form to get your work hours summary
    </p>
  );

  if (workHours) {
    summary = (
      <div className="my-3">
        <CostSalesTax
          state={state}
          stateSalesTax={stateSalesTax}
          initialCost={initialCost}
          finalCost={finalCost}
        />
        <WageAndIncomeTax
          hourlyWage={hourlyWage}
          hourlyWageFedIncTax={hourlyWageFedIncTax}
          fedIncTax={fedIncTax}
          workHours={workHours}
          selectedHourly={selectedHourly}
          salary={salary}
        />
        <WorkTimeSummary workHours={workHours} />
      </div>
    );
  }
  return <div>{summary}</div>;
};

export default Summary;
