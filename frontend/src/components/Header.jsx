import { Link } from 'react-router-dom';
import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa';
import {useNavigate,useLocation} from 'react-router-dom';

import useAuth from '../hooks/useAuth';
import '../index.css';

import Cookies from "universal-cookie";
const cookies = new Cookies();

function Header() {
    const {auth,setAuth} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/login' ;

    function signout(){
        cookies.remove("TOKEN");
        setAuth({});
        navigate(from , { replace:true });
    }

  return (
    <header className='header'>
        <div className='logo'>
            <Link to='/'>GoalSetter</Link>
        </div>
        {auth.user ? 
              <ul>
                <li className='' onClick={signout}>
                        <Link to='/login'>
                            <FaSignOutAlt/>
                                signout
                        </Link>
                </li>
              </ul>
        :
                <ul>
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
                </ul>
           }
    </header>
  )
}

export default Header