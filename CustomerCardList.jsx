import React from 'react';
import CustomerCard from './CustomerCard';
import './CustomerCard.css';

const customer = [
    {
      key : 0,
      customerPicture: 'customer1.jpeg',
      customerName: 'Sarah smith',
      customerDescription: 'Self-employed journalist. Requiring journalism website',
    },
    {
      key : 1,
      customerPicture: 'customer2.jpeg',
      customerName: 'Jack Harper',
      customerDescription: 'Diplomat. Requiring client booking and information website',
    },
    {
      key : 2,
      customerPicture: 'customer3.jpeg',
      customerName: 'Tosh Sato',
      customerDescription: 'Self-employed designer. Requiring business website development',
    }   
  ];

const CustomerCardList = () =>
{
    return (
    <div className = "row">
        {customer.map((customer) => (
        <CustomerCard className="picture-resize"
            key = {customer.key}
            customerPicture = {customer.customerPicture}
            customerName = {customer.customerName}
            customerDescription = {customer.customerDescription}
        />
        ))}
    </div>
    );
};

export default CustomerCardList;