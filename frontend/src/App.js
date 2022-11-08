import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashBoard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/Header';
import Cookies from "universal-cookie";
const cookies = new Cookies();

function App() {
  const token = cookies.get("TOKEN");

  return (
    <Router>
      <div>
          <Header/>
          <Routes>
              <Route path='/' element={token ? <DashBoard/> : <Login/>}/>
              {/* <Route path='/dashboard' element={<DashBoard/>}/> */}
              <Route path='/login' element={<Login/>}/>
              <Route path='/register' element={<Register/>}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
