export const workTime = hours => {
  if (hours < 8) {
    return {
      unit: "hours",
      amount: hours,
      message: ``
    };
  }
  const workDays = Math.floor(hours / 8);
  if (workDays < 14) {
    return {
      unit: "days",
      amount: workDays,
      message: `This would be the equivalent of working about ${workDays} 
      standard eight-hour work day${
        workDays > 1 ? "s" : ""
      } to afford your item!`
    };
  }
  const workWeeks = Math.floor(hours / 40);
  return {
    unit: "weeks",
    amount: workWeeks,
    message: `This would be the equivalent of working about ${workWeeks} 
    standard Forty-hour workweek${
      workWeeks > 1 ? "s" : ""
    } to afford your item!`
  };
};
