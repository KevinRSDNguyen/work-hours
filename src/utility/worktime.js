export const workTime = hours => {
  if (hours < 8) {
    return;
  }
  const workDays = Math.floor(hours / 8);
  if (workDays < 14) {
    return `This would be the equivalent of working about ${workDays} 
    standard eight-hour work day${
      workDays > 1 ? "s" : ""
    } to afford your item!`;
  }
  const workWeeks = Math.floor(hours / 40);
  return `This would be the equivalent of working about ${workWeeks} 
    standard Forty-hour workweek${
      workWeeks > 1 ? "s" : ""
    } to afford your item!`;
};
