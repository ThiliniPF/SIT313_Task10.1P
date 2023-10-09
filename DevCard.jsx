import React from 'react';
import './DevCard.css'

const DevCard = (props) =>
{
    return <div className="column">
        <img src={props.devPicture} className='picture-resize'/>
        <h3> {props.devName} </h3>
        <p> {props.devDescription} </p>
    </div>
}

export default DevCard;