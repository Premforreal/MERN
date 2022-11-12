import React,{useContext,createContext,useState} from 'react';
import axios from 'axios';
import Cookies from "universal-cookie";
const cookies = new Cookies();
const token = cookies.get("TOKEN");
const baseURL = "http://localhost:5000/api";

function Dashboard() {
const [first, setfirst] = useState('name');

  function User(){
          axios.get(`${baseURL}/users/me`,{ headers: {"Authorization" : `Bearer ${token}`} }
              
            ).then((response)=>{
                  const name = (response.data.name);
                  setfirst(name);
                
                }).catch((error)=>{
                      console.log(error);
                    });
        }
       
  return (
    <div className=''>
      Dashboard
      {first}
      <button onClick={User}>click</button>
    </div>
  );
}

export default Dashboard;