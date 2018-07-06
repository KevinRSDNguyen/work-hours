import React from "react";
import numerize from "./../../utility/numerize";

const WageAndIncomeTax = ({ hourlyWage, workHours }) => {
  return (
    <p>
      With an hourly wage of ${numerize(hourlyWage)}, it will take you{" "}
      {numerize(workHours)} hours to buy this item.
    </p>
  );
};

export default WageAndIncomeTax;
