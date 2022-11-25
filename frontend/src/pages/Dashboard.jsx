import {useState,useEffect} from 'react';
import axios from 'axios';
// import {} from 'react-icons/fa';

import Cookies from "universal-cookie";
const cookies = new Cookies();

const baseURL = "http://localhost:5000/api";

function Dashboard() {
    const [user,setUSer] = useState({
        email:'',
        id:'',
        name:''
    });
    const [goals, setGoals] = useState([]);
    const [formData, setFormData] = useState({task:''});
    const token = cookies.get("TOKEN");
    
    useEffect(() => {
      User();
      Goals();
    }, []);

    function User(){
        axios.get(`${baseURL}/users/me`,{ headers: {"Authorization" : `Bearer ${token}`} }
        ).then((response)=>{
                setUSer(response.data);
              }).catch((error)=>{
                    console.log(error);
        })};

      function Goals(){
        axios.get(`${baseURL}/goals`,
                  { headers: {"Authorization" : `Bearer ${token}`} }
                ).then((response)=>{
                        let goalsArray = [];
                        for(let i=0; i < response.data.length ; ++i){
                             goalsArray.push({
                                text:response.data[i].text,
                                id:response.data[i]._id
                            });
                        }
                        setGoals(goalsArray);
                  }).catch((error)=>{
                        console.log(error);
                  });
        };

//@form for create goals : This function clears the input field  and sets text value to state
        function onChange(e){
          setFormData((prevState)=>({
            ...prevState, 
              [e.target.name]:e.target.value,
          }))
        };  
//@Create goals : text value from above function is sent to backend using axios
        async function createGoals (){
          const config = {headers : {Authorization : `Bearer ${token}`}};
          const response = await axios.post(`${baseURL}/goals`,{text : formData.task},config);
          const data =  {text : response.data.text, id:response.data._id};
          setGoals((prevState)=>([...prevState,data]));
        }
//the setGoal function on backend expects {text : req.user.text,user : req.user.id}
        function onSubmit(e){
          e.preventDefault();
          setFormData({task:''});
          createGoals();
        };

  return (
    <>
       <div className='dashboard'>
          <section className='heading'>
            <h1>Welcome {user.name}</h1>
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