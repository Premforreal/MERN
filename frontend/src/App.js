import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import DashBoard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/Header';
import ProtectedRoutes from './features/ProtectedRoutes';
import { useState,useEffect,createContext,useContext} from 'react';
import { AuthContext } from './features/context';
import NotFound from './pages/NotFound';

function App() {
  const [loggedIn,setLoggedIn ] = useState(false);
  // const isLoggedIn = useContext(AuthContext);
  
  return (
    <AuthContext.Provider value={{loggedIn,setLoggedIn}}>
              <Header/>
              <Switch>
                  {/* <ProtectedRoutes component={<DashBoard/>} /> */}
                  <Route exact path='/register' component={Register}/>
                  <Route exact path='/login'  render={()=>(<Login/>)} />
                  <Route exact path='/' 
                      render={props=>loggedIn ? 
                              (<DashBoard /> )
                                : 
                              (<Redirect to="/login" />)
                            } 
                        />
                  <Route path="*" component={NotFound} />
                  {/* <ProtectedRoutes component={<DashBoard/>} /> */}
              </Switch>
     </AuthContext.Provider>
  );
}

export default App;
