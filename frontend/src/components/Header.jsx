import React from 'react';
import { Link } from 'react-router-dom';
import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa';

function Header({loggedIn}) {

  return (
    <header className='header'>
        <div className='logo'>
            <Link to='/'>GoalSetter</Link>
        </div>
        <ul className=''>
    {loggedIn ? 
            (<>
                <li className=''>
                    <Link to='/login'>
                        <FaSignInAlt/>
                        Login
                    </Link>            
                </li>
                <li className=''>
                    <Link to='/register'>
                        <FaUser/>
                        Register
                    </Link>            
                </li>
            </>)
        : 
            (<li className='sign-out' onClick={()=>console.log('click')} >
                {/* <Link to='/login'> */}
                    <FaSignOutAlt />
                    Signout
                {/* </Link>             */}
            </li>)
        }
        </ul>
    </header>
  )
}

export default Header