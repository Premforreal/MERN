import axios from 'axios';
import React, {useState,useEffect,useContext} from 'react';

import {useHistory} from 'react-router-dom';

import { FaSignInAlt } from 'react-icons/fa';
import { AuthContext } from '../features/context';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Cookies from "universal-cookie";
const cookies = new Cookies();
const token = cookies.get("TOKEN");

const baseURL = "http://localhost:5000/api";


function Login() {
  const history = useHistory();
  const { loggedIn, setLoggedIn } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email:'',
    password:'',
  });
  
  const {email,password} = formData;

  function onChange(e){
      setFormData((prevState)=>({
        ...prevState, 
          [e.target.name]:e.target.value,
      }))
  };  

  function getUser(token){
      axios.get(`${baseURL}/users/me`,{ headers: {"Authorization" : `Bearer ${token}`} }
      ).then((response)=>{
          console.log(response.data.name);
          if(response.data.name){
            setLoggedIn(true);
            window.location.href = "/";
            // history.push('/');
          }
        }).catch((error)=>{
              toast.error(error.response.data.message, {
              position: toast.POSITION.TOP_CENTER
            })
          });
  }

  function onSubmit(e){
    e.preventDefault();
    
    axios.post(`${baseURL}/users/login`, {
      email: email,
      password: password
      }).then((response) => {
          cookies.set("TOKEN", response.data.token, {
            path: "/",
          });
          // window.location.href = "/";
          getUser(response.data.token);
        }).catch((error)=>{
              toast.error(error.response.data.message, {
              position: toast.POSITION.TOP_CENTER
            })});
      };


  return (
    <>
      <ToastContainer />
    <section className='heading'>
      <h1><FaSignInAlt/> Login</h1>
      <p> Please enter your email and password</p>
    </section>
    <section className='form'>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <input
            type='email'
            className='form-control'
            id='email'
            name='email'
            value={email}
            placeholder='Enter your email'
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            className='form-control'
            id='password'
            name='password'
            value={password}
            placeholder='Enter password'
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <button type='submit' className='btn btn-block'>
            Submit
          </button>
        </div>
      </form>
    </section>
  </>
  );
}


export default Login;