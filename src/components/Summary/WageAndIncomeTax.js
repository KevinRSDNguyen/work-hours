import React from "react";
import numerize from "./../../utility/numerize";

const WageAndIncomeTax = ({
  hourlyWage,
  hourlyWageFedIncTax,
  fedIncTax,
  selectedHourly,
  salary
}) => {
  let hourlyAndGrossSummary = null;
  if (selectedHourly) {
    hourlyAndGrossSummary = `With an hourly wage of $${numerize(
      hourlyWage
    )}, this translates to a
    annual gross income of $${numerize(salary)}.`;
  } else {
    hourlyAndGrossSummary = `With an annual salary of $${numerize(
      salary
    )}, this translates to a
    hourly wage of $${numerize(hourlyWage)}.`;
  }
  return (
    <p>
      {hourlyAndGrossSummary} At this gross income level, your effective Federal
      Income Tax Rate is {(fedIncTax * 100).toFixed(2)}% (Assuming you filed
      your taxes in 2018 and as Single).{" "}
      <span className="font-weight-bold font-italic">
        After Federal Income Taxes are deducted, you actually make ${numerize(
          hourlyWageFedIncTax
        )}{" "}
        an hour.
      </span>
    </p>
  );
};

export default WageAndIncomeTax;
