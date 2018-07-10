import React from "react";

const WorkImage = ({ arrOfIcons, unitObj, smallText }) => {
  return (
    <div className="card text-center">
      <div className="card-body">
        <h1>
          {unitObj.amount} {unitObj.unit} of work.
        </h1>

        {smallText && (
          <small className="form-text text-muted mb-3">{smallText}</small>
        )}
        <div>{arrOfIcons}</div>
      </div>
    </div>
  );
};

export default WorkImage;
