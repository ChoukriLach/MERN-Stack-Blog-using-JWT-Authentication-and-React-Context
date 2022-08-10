import {useEffect , useState} from 'react'
import { Container , Row , Col } from 'react-bootstrap'
import WorkoutCard from '../Components/WorkoutCard'
import WorkoutForm from '../Components/WorkoutForm'


const Home = () => {

  const [workouts,setWorkouts] = useState(null)

  useEffect(()=>{

    const fetchWorkouts = async () => {
        const response = await fetch('/api/workouts/')
        const json = await response.json()

        if (response.ok) {
            setWorkouts(json)
        }
    }

    fetchWorkouts()  
  },[])

  return (
     <Container>
       <Row>
        <Col sm={8} style={{marginTop:"30px"}}>
          {workouts && Object.values(workouts).map((workout) => (
             <WorkoutCard key={workout._id} workout={workout}/>
          ))}
        </Col>
        <Col sm={4} style={{marginTop:"100px"}}>
           <WorkoutForm/>
        </Col>
      </Row>
     </Container>
  )
}

export default Home