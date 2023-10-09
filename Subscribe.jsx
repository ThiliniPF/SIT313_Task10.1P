import React from 'react';
import './Subscribe.css';

function Subscribe()
{
    return(
        <div className="header">
            <hr/>
            <h2 className="align"> SIGN UP FOR OUR DAILY INSIDER </h2>
            <form action="/" method="Post">
                <input type="email" name="email" placeholder="Enter your email" />
                <button type="Submit"> Subscribe </button>
            </form>
            <hr/>
        </div>
    )
}

export default Subscribe;