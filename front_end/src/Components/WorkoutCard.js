import { Card , Button} from 'react-bootstrap'
import { useWorkoutsContext } from '../Hooks/useWorkoutsContext'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const WorkoutCard = ({workout}) => {

  const {dispatch} = useWorkoutsContext()

  const handleClick = async () => {
    const response = await fetch(`/api/workouts/${workout._id}`,{
      method:'DELETE'
    })

    const json = await response.json()

    if(response.ok) {
        dispatch({type : 'DELETE_WORKOUT' , payload : json})
    }
  }

  return (
    <Card style={{marginBottom:"10px"}}>
        <Card.Header as="h5" style={{textAlign:"center"}}>{workout.title}</Card.Header>
        <Card.Body>
            <Card.Title>Reps (kg) : {workout.reps}</Card.Title>
            <Card.Text>
              Load : {workout.load}
            </Card.Text>
            <Button variant="danger" className='delete-button' onClick={handleClick}><i className="bi bi-archive-fill"></i></Button>
        </Card.Body>
        <Card.Footer className="text-muted" style={{textAlign:"center"}}>Last updated {formatDistanceToNow(new Date(workout.updatedAt),{addSuffix:true})}</Card.Footer>
    </Card>
  )
}

export default WorkoutCard