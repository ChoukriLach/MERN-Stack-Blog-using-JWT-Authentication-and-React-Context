import { Form , Button , Alert} from 'react-bootstrap'
import {useState} from 'react'
import { useWorkoutsContext } from '../Hooks/useWorkoutsContext'
import { useUsersContext } from '../Hooks/useUsersContext'

const WorkoutForm = () => {

  const {dispatch} = useWorkoutsContext()
  const {user} = useUsersContext()
  const [title , setTitle ] = useState('')
  const [reps , setReps ] = useState('')
  const [load , setLoad ] = useState('')
  const [error , setError ] = useState('')
  const [emptyFields , setEmptyFields ] = useState([])

  const handleSubmit = async (e) => {
     e.preventDefault()

     if(!user){
        setError('You must be logged in')
        return 
     }

     const workout = {title,reps,load}

     const response = await fetch('/api/workouts/',{
         method :'POST',
         body : JSON.stringify(workout),
         headers : {
            'Authorization': `Bearer ${user.token}`,
            'Content-Type': 'application/json'
         }
     })

     const json = await response.json()

     if(!response.ok){
         setError(json.error)
         setEmptyFields(json.emptyFields)
     } 
         
     if(response.ok){
         setTitle('')
         setReps('')
         setLoad('')
         setError(null)
         setEmptyFields([])
         dispatch({type:'CREATE_WORKOUT',payload:json})
     }

  }
  
  return (
    <div className='d-flex justify-content-center alig'>
        <Form onSubmit={handleSubmit} className="rounded p-4 p-sm-3">
            <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Title" onChange={(e)=> setTitle(e.target.value)} value={title} className={emptyFields.includes('title') ? 'error' : ''}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Control type="number" placeholder="Reps" onChange={(e)=> setReps(e.target.value)} value={reps} className={emptyFields.includes('reps') ? 'error' : ''}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Control type="number" placeholder="Load" onChange={(e)=> setLoad(e.target.value)} value={load} className={emptyFields.includes('load') ? 'error' : ''}/>
            </Form.Group>
            <Button variant="danger" type="submit">Add new workout</Button>
            {error && 
                <Alert key="danger" variant="danger" style={{marginTop:"20px"}}>
                {error}
                </Alert>
            }
        </Form>
    </div>
  )
}

export default WorkoutForm