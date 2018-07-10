import React from "react";

const Icons = ({ unit }) => {
  let iconsToReturn = null;
  if (unit === "hour(s)") {
    iconsToReturn = <i className="far fa-clock fa-3x p-1" />;
  } else if (unit === "day(s)") {
    iconsToReturn = <i className="fas fa-sun fa-3x p-1" />;
  } else if (unit === "week(s)") {
    iconsToReturn = <i className="far fa-calendar-minus fa-2x p-1" />;
  }
  return iconsToReturn;
};

export default Icons;
