import {FaRegTrashAlt} from 'react-icons/fa';
import {BsPencilSquare} from 'react-icons/bs';

const GoalComponent = ({props}) => {
    const [goals,deleteGoal,updateGoal] = props;

  return (<>
             {goals.map((goal)=>(
                  <div className="goal" key={goal.id}>
                            <h2>{goal.title}</h2>
                            <p>{goal.text}</p>
                            <div className="goal-icons">
                              <BsPencilSquare onClick={()=>updateGoal(goal.id)} className='update' />
                              <FaRegTrashAlt onClick={()=>deleteGoal(goal.id)} className='delete'  />
                            </div>
                  </div>
                ))} 
        </>
  )
}

export default GoalComponent