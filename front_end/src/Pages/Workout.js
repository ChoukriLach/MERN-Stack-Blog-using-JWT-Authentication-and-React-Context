import React, { useEffect , useState } from 'react'
import { useParams} from 'react-router-dom'
import { Form , Button ,Alert,Spinner} from 'react-bootstrap'
import { useUsersContext } from '../Hooks/useUsersContext'

function Workout() {

  const {id} = useParams()
  const [title , setTitle ] = useState('')
  const [reps , setReps ] = useState('')
  const [load , setLoad ] = useState('')
  const [error , setError ] = useState(null)
  const [succes,setSucces] = useState(false)
  const [isLoading,setIsLoading] = useState(false)
  const {user} = useUsersContext()

  const handleSubmit = async (e) => {
      e.preventDefault()
      setError(null)
      setIsLoading(true)
      setSucces(false)

      if(!user){
        setError('You must be logged in')
        return 
      }

      const workout = {}

      if(title) {
        workout['title'] = title
      }

      if(reps) {
        workout['reps'] = reps
      }

      if(load) {
        workout['load'] = load
      }

      const response = await fetch(`/api/workouts/${id}`,{
         method :'PATCH',
         body : JSON.stringify(workout),
         headers : {
            'Authorization': `Bearer ${user.token}`,
            'Content-Type': 'application/json'
         }
      })

      const json = await response.json()

      if(!response.ok){
        setError(json.error)
        setIsLoading(false)
      }

      if(response.ok){
        if(!title) {
          setTitle(json.title)
        }

        if(!reps) {
          setReps(json.reps)
        }

        if(!load) {
          setLoad(json.load)
        }
        setSucces(true)
        setIsLoading(false)
      }
  }

  useEffect(()=>{
    const fetchWorkout = async () => {
        const response = await fetch(`/api/workouts/${id}`,{
          headers:{
            'Authorization': `Bearer ${user.token}`
          }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }

        if (response.ok) {
            setTitle(json.title)
            setReps(json.reps)
            setLoad(json.load)
            setError(null)
        }
    }

    if (user) {
      fetchWorkout()
    }  
  },[user,id])

  return (
    <div className="login_signup_form d-flex justify-content-center align-items-center">
      <Form onSubmit={handleSubmit} className="rounded p-4 p-sm-3">

        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Title" onChange={(e)=> setTitle(e.target.value)} value={title}/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control type="number" placeholder="Reps" onChange={(e)=> setReps(e.target.value)} value={reps}/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control type="number" placeholder="Load" onChange={(e)=> setLoad(e.target.value)} value={load}/>
        </Form.Group>

        {!isLoading &&
              <Button variant="danger" type="submit">
                Update
              </Button>
        }
        {error && 
              <Alert key="danger" variant="danger" style={{marginTop:"20px"}}>
                {error}
              </Alert>
        }
        {succes && 
              <Alert key="success" variant="success" style={{marginTop:"20px"}}>
                Updated successfully
              </Alert>
        }
        {isLoading && 
              <Button variant="primary" disabled>
                <Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                Loading...
              </Button>
        }
      </Form>
    </div>
  )
}

export default Workout