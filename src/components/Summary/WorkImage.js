import React from "react";

const WorkImage = ({ arrOfIcons, unitToUse, smallText }) => {
  return (
    <div className="row">
      <div className="col-md-9 mx-auto">
        <div className="card text-center">
          <div className="card-body">
            <div>{arrOfIcons}</div>
            <h1>
              {unitToUse.amount} {unitToUse.unit} of work.
            </h1>

            {smallText && (
              <small className="form-text text-muted">{smallText}</small>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkImage;
