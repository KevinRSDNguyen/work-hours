import estimator from "us-tax-estimator";

export const hourlyToSalary = hourlyWage => {
  return hourlyWage * 2000;
};

export const salaryToHourly = salary => {
  return salary / 2080;
};

export const effectiveFedIncTax = grossIncome => {
  const year = "2018";
  const filingStatus = "single";
  const exemptions = 1;
  const deductions = estimator.constants.standardDeduction[year][filingStatus];
  return estimator.calculate(
    year,
    filingStatus,
    grossIncome,
    exemptions,
    deductions
  ).effectiveTaxRate;
};

export const hourlyWageAfterIncTax = hourly => {
  const grossIncome = hourlyToSalary(hourly);
  const fedIncTaxRate = effectiveFedIncTax(grossIncome);
  return hourly * (1 - fedIncTaxRate);
};
