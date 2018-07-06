import React from "react";
import { workTime } from "./../../utility/worktime";
import Icons from "./Icons";
import Aux from "./../../hoc/Auxx/Auxx";

const WorkTimeSummary = ({ workHours }) => {
  let workImage = null;
  // If between 1 and 14 days to get the item
  if (workHours < 8) {
    workHours = Math.floor(workHours);
    const arrOfIcons = [];
    for (let i = 1; i <= workHours; i++) {
      arrOfIcons.push(<Icons key={i} hours />);
    }
    workImage = (
      <div className="row">
        <div className="col-md-9 mx-auto">
          <div className="card text-center">
            <div className="card-body">
              <div>{arrOfIcons}</div>
              <h1>{workHours} hours of work.</h1>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (workHours < 112 && workHours >= 8) {
    const workDays = Math.floor(workHours / 8);
    const arrOfIcons = [];
    for (let i = 1; i <= workDays; i++) {
      arrOfIcons.push(<Icons key={i} days />);
    }
    workImage = (
      <div className="row">
        <div className="col-md-9 mx-auto">
          <div className="card text-center">
            <div className="card-body">
              <div>{arrOfIcons}</div>
              <h1>{workDays} days of work.</h1>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (workHours >= 112) {
    const workWeeks = Math.floor(workHours / 40);
    const arrOfIcons = [];
    for (let i = 1; i <= workWeeks; i++) {
      arrOfIcons.push(<Icons key={i} weeks />);
    }
    workImage = (
      <div className="row">
        <div className="col-md-9 mx-auto">
          <div className="card text-center">
            <div className="card-body">
              <div>{arrOfIcons}</div>
              <h1>{workWeeks} weeks of work.</h1>
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
