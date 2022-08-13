import {useEffect} from 'react'
import { Container , Row , Col} from 'react-bootstrap'
import WorkoutCard from '../Components/WorkoutCard'
import WorkoutForm from '../Components/WorkoutForm'
import { useWorkoutsContext } from '../Hooks/useWorkoutsContext'
import { useUsersContext } from '../Hooks/useUsersContext'



const Home = () => {

  const {workouts,dispatch} = useWorkoutsContext()
  const {user} = useUsersContext()

  useEffect(()=>{

    const fetchWorkouts = async () => {
        const response = await fetch('/api/workouts/',{
          headers:{
            'Authorization': `Bearer ${user.token}`
          }
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type : 'SET_WORKOUTS' , payload : json})
        }
    }

    if (user) {
      fetchWorkouts()
    }  
  },[dispatch,user])

  return (
     <Container>
       <Row>
        <Col sm={8} style={{marginTop:"30px"}}>
          {workouts && Object.values(workouts).map((workout) => (
             <WorkoutCard key={workout._id} workout={workout}/>
          ))}
        </Col>
        <Col sm={4} style={{marginTop:"70px"}}>
           <WorkoutForm/>
        </Col>
      </Row>
     </Container>  
  )
}

export default Home