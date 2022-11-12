import { Link } from 'react-router-dom';
import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa';
import { useEffect ,useContext ,useState} from 'react';
import { AuthContext } from '../features/context';
import Cookies from "universal-cookie";
const cookies = new Cookies();
const token = cookies.get("TOKEN");

function Header() {
    const { loggedIn, setLoggedIn } = useContext(AuthContext);

    function signout(){
        cookies.remove("TOKEN");
        setLoggedIn(!loggedIn);
        window.location.href = "/login";
        // window.location.reload();
    }

  return (
    <header className='header'>
        <div className='logo'>
            <Link to='/'>GoalSetter</Link>
        </div>
        {/* <button onClick={()=>{setLoggedIn(!loggedIn)}}>click</button>
        <button onClick={()=>{
                        cookies.remove("TOKEN");
                        window.location.reload();
                                }}>
                remove token
        </button>         */}

            <ul >
                {loggedIn ?
                            <li className='' onClick={signout}>
                                <Link to='/login'>
                                    <FaSignOutAlt/>
                                        signout
                                </Link>
                            </li>
            :
                        <>
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
                        </>
                }
            </ul>
    </header>
  )
}

export default Header