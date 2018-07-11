import React from "react";
import { workTime } from "./../../utility/worktime";
import numerize from "./../../utility/numerize";

import Aux from "./../../hoc/Auxx/Auxx";
import Icons from "./Icons";
import WorkImage from "./WorkImage";

const WorkTimeSummary = ({ workHours }) => {
  const unitObj = workTime(workHours);
  const { unit, amount } = unitObj;
  const arrOfIcons = [];

  if (amount < 5000) {
    for (let i = 1; i <= amount; i++) {
      arrOfIcons.push(<Icons key={i} unit={unit} />);
    }
  }

  let smallText =
    unit === "day(s)"
      ? "Assuming you work 8 hours a day"
      : "Assuming you work 40 hours a week";

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
