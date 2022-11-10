import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DashBoard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/Header';
import ProtectedRoutes from './features/ProtectedRoutes';
import { useState,useEffect,createContext,useContext} from 'react';
import { AuthContext } from './features/context';

function App() {
  const [loggedIn,setLoggedIn ] = useState(false);
  const isLoggedIn = useContext(AuthContext);
  
  return (
    <AuthContext.Provider value={{loggedIn,setLoggedIn}}>
        <Router>
          <div>
              <Header/>
              <Switch>
                  {/* <ProtectedRoutes component={<DashBoard/>} /> */}
                  <Route path='/' element={<DashBoard />} />
                  <Route path='/login' element={<Login/>}/>
                  <Route path='/register' element={<Register/>}/>
              </Switch>
          </div>
       </Router>
    </AuthContext.Provider>
  );
}

export default App;
