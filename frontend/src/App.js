import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashBoard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/Header';
import ProtectedRoutes from './features/ProtectedRoutes';
import { useState,useEffect } from 'react';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  function isLoggedin(value){
    setLoggedIn(value);
  };

  useEffect(() => {
    console.log(`from app ${loggedIn}`);
  }, [loggedIn])
  
  return (
        <Router>
          <div>
              <Header loggedIn={loggedIn} isLoggedin={isLoggedin} />
              <Routes>
                  {/* <Route path='/' 
                        element={
                          <ProtectedRoutes token={token}>
                              <DashBoard/>
                          </ProtectedRoutes>
                        }/> */}
                  {/* <Route path='/' element={<DashBoard/>}/> */}
                  <Route path='/' element={<DashBoard />} />
                  <Route path='/login' 
                      element={<Login loggedIn={loggedIn} isLoggedin={isLoggedin} />}/>
                  <Route path='/register' element={<Register/>}/>
              </Routes>
          </div>
        </Router>
  );
}

export default App;
