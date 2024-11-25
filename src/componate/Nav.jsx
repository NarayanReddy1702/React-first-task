import React from 'react'
import "./Nav.css";
import { NavLink } from 'react-router-dom';

export default function () {
  return (
    <div className='nav d-flex-bet'>
      <h2>Coding</h2>
      <ul className='d-flex'>
       <li><NavLink to="/">Home</NavLink></li>
       <li><NavLink to="/About">About</NavLink></li>
       <li><NavLink to="/Course">Course</NavLink></li>
       <li><NavLink to="/Contact">Contact Us</NavLink></li>
      
      </ul>
      <button className='btn'>SignIn/LogIn</button>
    </div>
  )
}

