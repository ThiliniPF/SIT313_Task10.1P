import React from 'react';
import './navbar.css';

function Navbar(props) {

    return <div className='navbar-div'> 
    <ul>
        <li><a href="#CreateAccount"> {props.text4} </a></li>
        <li><a href="#Login"> {props.text3} </a></li>
        <li><a href="#FindJobs"> {props.text2} </a></li>
        <li><a href="#FindDev"> {props.text1} </a></li>
        <li><a href="#Home"> {props.text} </a></li>
    </ul>
    </div>
}

export default Navbar;