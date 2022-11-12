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
  
  return (
    <AuthContext.Provider value={{loggedIn,setLoggedIn}}>
              <Header/>
              <Switch>
                  <Route exact path='/register' component={Register}/>
                  <Route exact path='/login'  component={Login} />
                  {/* <Route exact path='/' 
                      render={props=>loggedIn ? 
                              (<DashBoard /> )
                                : 
                              (<Redirect to="/login" />)
                            } 
                        /> */}
                  <ProtectedRoutes component={DashBoard} />
                  <Route path="*" component={NotFound} />
              </Switch>
     </AuthContext.Provider>
  );
}

export default App;
