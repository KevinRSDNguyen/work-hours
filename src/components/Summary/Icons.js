import React from "react";

const Icons = ({ hours, days, weeks }) => {
  let iconsToReturn = null;
  if (hours) {
    iconsToReturn = <i className="far fa-clock fa-3x p-1" />;
  } else if (days) {
    iconsToReturn = <i className="fas fa-sun fa-3x p-1" />;
  } else if (weeks) {
    iconsToReturn = <i className="far fa-calendar-minus fa-2x p-1" />;
  }
  return iconsToReturn;
};

export default Icons;
