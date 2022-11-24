import axios from 'axios';
import React, {useState,useEffect,useContext} from 'react';

import { FaUser } from 'react-icons/fa';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Cookies from "universal-cookie";
const cookies = new Cookies();
const token = cookies.get("TOKEN");

const baseURL = "http://localhost:5000/api";


function Register() {

  const [formData, setFormData] = useState({
    name:'',
    email:'',
    password:'',
    password2:''
  });
  
  const {name,email,password,password2} = formData;
  
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
          window.location.href = "/";
        }
      }).catch((error)=>{
            toast.error(error.response.data.message, {
            position: toast.POSITION.TOP_CENTER
          })
        });
  }

  function onSubmit(e){
    e.preventDefault();
    axios.post(`${baseURL}/users/`, {
      name:name,
      email: email,
      password: password
      }).then((response) => {
          cookies.set("TOKEN", response.data.token, {
            path: "/",
          });
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
      <h1>
        <FaUser/> Register
      </h1>
      <p>Please create an account</p>
    </section>

    <section className='form'>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            id='name'
            name='name'
            value={name}
            placeholder='Enter your name'
            onChange={onChange}
          />
        </div>
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
          <input
            type='password'
            className='form-control'
            id='password2'
            name='password2'
            value={password2}
            placeholder='Confirm password'
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

export default Register