import React from 'react';
import { Link } from 'react-router-dom';
import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa';

function Header() {
  return (
    <header className='header'>
        <div className='logo'>
            <Link to='/'>GoalSetter</Link>
        </div>
        <ul className='flex flex-row'>
            <li className='p-2'>
                <Link to='/login'>
                    <FaSignInAlt/>
                    Login
                </Link>            
            </li>
            <li className='p-2'>
                <Link to='/register'>
                    <FaUser/>
                    Register
                </Link>            
            </li>
        </ul>
    </header>
  )
}

export default Header