import React from 'react';
import img from '../assets/pagenotfound.jpg';

function NotFound() {
  return (
    <div className='not-found'>
        <img src={img} alt="page not found" />
    </div>
  )
}

export default NotFound