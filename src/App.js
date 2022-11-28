import { Routes, Route } from 'react-router-dom';
import DashBoard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/Header';
import NotFound from './pages/NotFound';
import Layout from './components/Layout';
import RequireAuth from './components/RequireAuth';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route  path='/' element={<Layout/>} >
            <Route element={<RequireAuth/>}>
              <Route  path='/mern-Goals/dashboard' element={<DashBoard/>} />
            </Route>
              <Route  path='/mern-Goals/register'  element={<Register/>}  />
              <Route  path='/mern-Goals/login'     element={<Login/>}     />
              <Route  path="*"                     element={<NotFound/>}  />
        </Route>
      </Routes>
    </>
  );
}

export default App;
