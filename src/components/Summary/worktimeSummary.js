import React from "react";
import { workTime } from "./../../utility/worktime";

import Aux from "./../../hoc/Auxx/Auxx";
import Icons from "./Icons";
import WorkImage from "./WorkImage";

const WorkTimeSummary = ({ workHours }) => {
  const unitToUse = workTime(workHours);
  const arrOfIcons = [];
  let workImage = null;
  // If between 1 and 14 days to get the item
  if (unitToUse.unit === "hours") {
    for (let i = 1; i <= unitToUse.amount; i++) {
      arrOfIcons.push(<Icons key={i} hours />);
    }
    workImage = <WorkImage arrOfIcons={arrOfIcons} unitToUse={unitToUse} />;
  } else if (unitToUse.unit === "days") {
    for (let i = 1; i <= unitToUse.amount; i++) {
      arrOfIcons.push(<Icons key={i} days />);
    }
    workImage = (
      <WorkImage
        arrOfIcons={arrOfIcons}
        unitToUse={unitToUse}
        smallText={"Assuming you work 8 hours a day"}
      />
    );
  } else if (unitToUse.unit === "weeks") {
    for (let i = 1; i <= unitToUse.amount; i++) {
      arrOfIcons.push(<Icons key={i} weeks />);
    }
    workImage = (
      <WorkImage
        arrOfIcons={arrOfIcons}
        unitToUse={unitToUse}
        smallText="Assuming you wotk 40 hours a week"
      />
    );
  }
  return (
    <Aux>
      <p>{unitToUse.message}</p>
      {workImage}
    </Aux>
  );
};

export default WorkTimeSummary;
