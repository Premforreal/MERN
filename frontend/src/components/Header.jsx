import React from 'react';
import { Link } from 'react-router-dom';
import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa';
import { useEffect } from 'react';
import Cookies from "universal-cookie";
const cookies = new Cookies();
const token = cookies.get("TOKEN");


function Header({loggedIn,isLoggedin}) {

    useEffect(() => {
      console.log(`from header ${loggedIn}`);
    }, [loggedIn])
    

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
            (<li className='sign-out' 
                 onClick={()=>{
                        cookies.remove("TOKEN");
                        isLoggedin(false);
                        window.location.href = "/login";
                    }} 
                >
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