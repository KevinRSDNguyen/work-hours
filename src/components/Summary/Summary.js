import React from "react";

const Summary = ({ summaryData }) => {
  let summary = <p>Pease fill out the form for a summary</p>;
  if (summaryData.workHours) {
    summary = (
      <p>
        It will take you {summaryData.workHours} hours to buy this at your
        current wage
      </p>
    );
  }
  return <div>{summary}</div>;
};

export default Summary;
