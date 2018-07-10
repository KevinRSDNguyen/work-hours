import React from "react";
import numerize from "./../../utility/numerize";
import {
  hourlyToSalary,
  effectiveFedIncTax
} from "./../../utility/salaryIncomeTax";

const WageAndIncomeTax = ({
  hourlyWage,
  hourlyWageFedIncTax,
  workHours,
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
      {hourlyAndGrossSummary} At this gross income level, assuming you filed as
      Single and in 2018, your effective Federal Income Tax Rate is{" "}
      {(effectiveFedIncTax(salary) * 100).toFixed(2)}%. Thus you really only
      make ${numerize(hourlyWageFedIncTax)} an hour after income taxes are
      deducted. It will take you {numerize(workHours)} hours to buy this item.
    </p>
  );
};

export default WageAndIncomeTax;
