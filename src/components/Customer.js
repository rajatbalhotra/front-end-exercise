import React, { useState } from "react";

import classes from "./Customer.module.css";

const Customer = (props) => {
  const [customerDetails, setCustomerDetails] = useState(false);
  const [rentalDetails, setRentalDetails] = useState(false);

  const showDetails = () => {
    setCustomerDetails(true);
    setRentalDetails(false);
  };

  const showRentals = () => {
    setRentalDetails(true);
    setCustomerDetails(false);
  };

  return (
    <li className={classes.customer}>
      <h2>{props.firstName}</h2>
      <button onClick={showDetails}>Show details!</button>
      <button onClick={showRentals}>Show Rentals!</button>
      <h3>
        {rentalDetails
          ? props.rentals.map((rentals, idx) => rentals.FilmTitle)
          : null}
      </h3>
      <h3>
        {rentalDetails
          ? props.rentals.map((rentals, idx) => rentals.RentalDate)
          : null}
      </h3>
      <h3>
        {rentalDetails
          ? props.rentals.map((rentals, idx) => rentals.ReturnDate)
          : null}
      </h3>
      <h3>{customerDetails ? props.address : null}</h3>
      <h4>{customerDetails ? props.country : null}</h4>
    </li>
  );
};

export default Customer;
