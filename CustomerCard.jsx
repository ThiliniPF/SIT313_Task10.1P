import React from 'react';
import './CustomerCard.css'

const CustomerCard = (props) =>
{
    return <div className="column">
        <img src={props.customerPicture} className='picture-resize'/>
        <h3> {props.customerName} </h3>
        <p> {props.customerDescription} </p>
    </div>
}

export default CustomerCard;