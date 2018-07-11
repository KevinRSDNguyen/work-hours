import React from "react";

const About = () => {
  return (
    <div className="my-4">
      <p>
        You invest your time at work to recieve money, so as the cliche goes
        "Time is money". This is how I have always viewed purchasing goods, such
        as the relization that for me to spend $20 on a 2 hour IMAX movie would
        cost me the same amount of time at my retail job.
      </p>
      <p>
        This app allows you to enter your hourly wage or yearly salary. Sales
        and Federal Income Taxes are automatically calculated. A helpful visual
        is also provided to better understand you would need to work.
      </p>
      <p>
        Calculations for average state and local sales tax can be seen{" "}
        <a
          href="https://taxfoundation.org/state-and-local-sales-tax-rates-2018/"
          target="blank"
        >
          here.
        </a>
        <br />
        Calculations for Federal Income Tax provided by this{" "}
        <a href="https://jdifebo.github.io/us-tax-estimator/" target="blank">
          NPM Package
        </a>.
      </p>
    </div>
  );
};

export default About;
