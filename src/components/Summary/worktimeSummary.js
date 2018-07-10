import React from "react";
import { workTime } from "./../../utility/worktime";
import numerize from "./../../utility/numerize";

import Aux from "./../../hoc/Auxx/Auxx";
import Icons from "./Icons";
import WorkImage from "./WorkImage";

const WorkTimeSummary = ({ workHours }) => {
  const unitObj = workTime(workHours);
  const unit = unitObj.unit;
  const arrOfIcons = [];
  for (let i = 1; i <= unitObj.amount; i++) {
    arrOfIcons.push(<Icons key={i} unit={unit} />);
  }

  let smallText = "";
  if (unit === "days") {
    smallText = "Assuming you work 8 hours a day";
  } else if (unit === "weeks") {
    smallText = "Assuming you work 40 hours a week";
  }
  return (
    <Aux>
      <p>
        It will take you{" "}
        <span className="font-weight-bold font-italic">
          {numerize(workHours)} hours
        </span>{" "}
        to buy this item. {unitObj.message}
      </p>
      <WorkImage
        arrOfIcons={arrOfIcons}
        unitObj={unitObj}
        smallText={smallText}
      />
    </Aux>
  );
};

export default WorkTimeSummary;
