import numeral from "numeral";

//Adds Commas for the numbers
const numerize = amount => {
  return numeral(amount).format("0,0.00");
};

export default numerize;
