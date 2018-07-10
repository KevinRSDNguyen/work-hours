const isInvalid = state => {
  if (!state.initialCost || (!state.hourlyWage && !state.salary)) {
    return `All fields must be filled out`;
  }
  if (
    parseFloat(state.hourlyWage, 10) === 0 ||
    parseFloat(state.salary, 10) === 0
  ) {
    return `You cannot have a wage or salary of $0`;
  }
  return false;
};

export default isInvalid;
