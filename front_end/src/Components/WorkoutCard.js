import { Card , Button} from 'react-bootstrap'

const WorkoutCard = ({workout}) => {
  return (
    <Card style={{marginBottom:"10px"}}>
        <Card.Header as="h5" style={{textAlign:"center"}}>{workout.title}</Card.Header>
        <Card.Body>
            <Card.Title>Reps (kg) : {workout.reps}</Card.Title>
            <Card.Text>
              Load : {workout.load}
            </Card.Text>
            <Button variant="danger" className='delete-button'><i className="bi bi-archive-fill"></i></Button>
        </Card.Body>
        <Card.Footer className="text-muted" style={{textAlign:"center"}}>Last updated {workout.updatedAt}</Card.Footer>
    </Card>
  )
}

export default WorkoutCard