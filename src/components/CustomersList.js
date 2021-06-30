import React from 'react';

import Customer from './Customer';
import classes from './CustomersList.module.css';

const CustomersList = (props) => {
  return (
    <ul className={classes['customers-list']}>
      {props.customers.map((customer, idx) => (
        <Customer
          key={idx}
          firstName={customer.firstName}
          address={customer.address}
          country={customer.country}
          rentals={customer.rentals}
        />
      ))}
    </ul>
  );
};

export default CustomersList;
