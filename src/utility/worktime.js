export const workTime = hours => {
  if (hours < 8) {
    return {
      unit: "hour(s)",
      amount: hours.toFixed(2),
      message: ``
    };
  }
  const workDays = Math.round(hours / 8);
  if (workDays < 7) {
    return {
      unit: "day(s)",
      amount: workDays,
      message: `This would be the equivalent of working about ${workDays} 
      standard eight-hour work day${
        workDays > 1 ? "s" : ""
      } to afford your item!`
    };
  }
  const workWeeks = Math.round(hours / 40);
  return {
    unit: "week(s)",
    amount: workWeeks,
    message: `This would be the equivalent of working about ${workWeeks} 
    standard forty-hour work week${
      workWeeks > 1 ? "s" : ""
    } to afford your item!`
  };
};
