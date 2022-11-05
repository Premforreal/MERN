import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='top-0  flex flex-row bg-black text-white w-full'>
        <div className='w-2/3 p-2 text-2xl'>
            <Link to='/'>
                GoalSetter
            </Link>
        </div>
        <ul className='flex flex-row'>
            <li className='p-2'>
                <Link to='/login'>
                    Login
                </Link>            
            </li>
            <li className='p-2'>
                <Link to='/register'>
                    Register
                </Link>            
            </li>
        </ul>
    </header>
  )
}

export default Header