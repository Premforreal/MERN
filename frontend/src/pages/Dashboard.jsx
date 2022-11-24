import {useState,useEffect} from 'react';
import axios from 'axios';
// import {} from 'react-icons/fa';

import Cookies from "universal-cookie";
const cookies = new Cookies();

const baseURL = "http://localhost:5000/api";

function Dashboard() {
    const [name, setName] = useState('');
    const [goals, setGoals] = useState([]);
    const [formData, setFormData] = useState({task:''});
    const token = cookies.get("TOKEN");

    function User(){
            axios.get(`${baseURL}/users/me`,{ headers: {"Authorization" : `Bearer ${token}`} }
              ).then((response)=>{
                      setName(response.data.name);
                    }).catch((error)=>{
                          console.log(error);
              })};

    function getGoals(input){
          let output = [];
          for (let i=0; i < input.length ; ++i)
              output.push({
                            text:input[i].text,
                            id:input[i]._id
                          });
          return output;
      };

      let allGoals;

      function Goals(){
        axios.get(`${baseURL}/goals`,
                  { headers: {"Authorization" : `Bearer ${token}`} }
                ).then((response)=>{
                        allGoals = getGoals(response.data);
                        setGoals(allGoals);
                  }).catch((error)=>{
                        console.log(error);
                  });
        };

        useEffect(() => {
            User();
            Goals();
        }, []);

        function onChange(e){
          setFormData((prevState)=>({
            ...prevState, 
              [e.target.name]:e.target.value,
          }))
        };  

        const onSubmit = (e)=>{
          e.preventDefault();
          setFormData({task:''});
          console.log(formData.task);
        }

  return (
    <>
       <div className='dashboard'>
          <section className='heading'>
            <h1>Welcome {name}</h1>
            <p>Goals Dashboard</p>
          </section>

          <section className='form'>
            <form onSubmit={(e)=>onSubmit(e)}>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  id='task'
                  name='task'
                  value={formData.task}
                  placeholder='Enter your task'
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <button type='submit' className='btn btn-block'>
                    Add goal
                </button>
              </div>
            </form>
          </section>

        </div>
          {goals[0] ?
            (<div className="content">
                <div className='goals'>
                  {goals.map((goal)=>(
                    <div className="goal" key={goal.id}>
                      <h2>{goal.text}</h2>
                    </div>
                  ))}
                </div>
            </div>)
          :
          (<h1>You have no goals.</h1>)
          }
    </>);
}

export default Dashboard;