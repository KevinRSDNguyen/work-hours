import React from "react";
import { workTime } from "./../../utility/worktime";
import Icons from "./Icons";
import Aux from "./../../hoc/Auxx/Auxx";

const WorkTimeSummary = ({ workHours }) => {
  let workImage = null;
  // If between 1 and 14 days to get the item
  if (workHours < 112 && workHours >= 8) {
    const workDays = Math.floor(workHours / 8);
    const arrOfSunIcons = [];
    for (let i = 1; i <= workDays; i++) {
      arrOfSunIcons.push(<Icons key={i} />);
    }
    workImage = (
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="card text-center">
            <div className="card-body">
              <div>{arrOfSunIcons}</div>
              <h4>{workDays} days of work.</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <Aux>
      <p>{workTime(workHours)}</p>
      {workImage}
    </Aux>
  );
};

export default WorkTimeSummary;
