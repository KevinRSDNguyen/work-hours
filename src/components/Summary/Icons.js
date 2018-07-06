import React from "react";

const Icons = ({ unit }) => {
  let iconsToReturn = null;
  if (unit === "hours") {
    iconsToReturn = <i className="far fa-clock fa-3x p-1" />;
  } else if (unit === "days") {
    iconsToReturn = <i className="fas fa-sun fa-3x p-1" />;
  } else if (unit === "weeks") {
    iconsToReturn = <i className="far fa-calendar-minus fa-2x p-1" />;
  }
  return iconsToReturn;
};

export default Icons;
