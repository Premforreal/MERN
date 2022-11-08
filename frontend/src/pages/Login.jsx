import axios from 'axios';
import React, {useState,useEffect} from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const baseURL = "http://localhost:5000/api";
//@register user POST   :http://localhost:5000/api/users/
//@login user POST      :http://localhost:5000/api/users/login
//@get user details GET :http://localhost:5000/api/users/me


function Login() {
  
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
          console.log(response.data);
        }).catch((error)=>{
              toast.error(error.response.data.message, {
              position: toast.POSITION.TOP_CENTER
            });
          })
  }

  function onSubmit(e)
  {
    e.preventDefault();
    
    axios.post(`${baseURL}/users/login`, {
      email: email,
      password: password
      }).then((response) => {
          console.log(response.data.token);
          getUser(response.data.token);
        }).catch((error)=>{
              toast.error(error.response.data.message, {
              position: toast.POSITION.TOP_CENTER
            });
            // console.log(error.response.data.message);
            // console.log((Object.keys(error).length));
            })
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