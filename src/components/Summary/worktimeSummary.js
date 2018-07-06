import React from "react";
import { workTime } from "./../../utility/worktime";
import Icons from "./Icons";
import Aux from "./../../hoc/Auxx/Auxx";

const WorkTimeSummary = ({ workHours }) => {
  const unitToUse = workTime(workHours);
  let workImage = null;
  // If between 1 and 14 days to get the item
  if (unitToUse.unit === "hours") {
    const arrOfIcons = [];
    for (let i = 1; i <= unitToUse.amount; i++) {
      arrOfIcons.push(<Icons key={i} hours />);
    }
    workImage = (
      <div className="row">
        <div className="col-md-9 mx-auto">
          <div className="card text-center">
            <div className="card-body">
              <div>{arrOfIcons}</div>
              <h1>{unitToUse.amount.toFixed(2)} hours of work.</h1>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (unitToUse.unit === "days") {
    const arrOfIcons = [];
    for (let i = 1; i <= unitToUse.amount; i++) {
      arrOfIcons.push(<Icons key={i} days />);
    }
    workImage = (
      <div className="row">
        <div className="col-md-9 mx-auto">
          <div className="card text-center">
            <div className="card-body">
              <div>{arrOfIcons}</div>
              <h1>{unitToUse.amount} days of work.</h1>
              <small className="form-text text-muted">
                Assuming you work 8 hours a day
              </small>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (unitToUse.unit === "weeks") {
    const arrOfIcons = [];
    for (let i = 1; i <= unitToUse.amount; i++) {
      arrOfIcons.push(<Icons key={i} weeks />);
    }
    workImage = (
      <div className="row">
        <div className="col-md-9 mx-auto">
          <div className="card text-center">
            <div className="card-body">
              <div>{arrOfIcons}</div>
              <h1>{unitToUse.amount} weeks of work.</h1>
              <small className="form-text text-muted">
                Assuming you work 40 hours a week
              </small>
            </div>
          </div>
        </div>
      </div>
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
