import React from "react";
import { workTime } from "./../../utility/worktime";

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
      <p>{unitObj.message}</p>
      <WorkImage
        arrOfIcons={arrOfIcons}
        unitObj={unitObj}
        smallText={smallText}
      />
    </Aux>
  );
};

export default WorkTimeSummary;
