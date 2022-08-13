import { useState } from 'react'
import { Form , Button ,Alert , Spinner} from 'react-bootstrap'
import { useUsersContext } from '../Hooks/useUsersContext'

function Login() {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [error,setError] = useState(null)
  const [succes,setSucces] = useState(false)
  const [isLoading,setIsLoading] = useState(false)
  const {dispatch} = useUsersContext()

  const handleSubmit = async (e) => {
     e.preventDefault()
     setError(null)
     setIsLoading(true)
     setSucces(false)

     const response = await fetch('/api/user/login',{
       method:'POST',
       headers:{'Content-Type': 'application/json'},
       body:JSON.stringify({email,password})
     })

     const json = await response.json()

     if (!response.ok){
       setError(json.error)
       setIsLoading(false)
     }

     if (response.ok){
       localStorage.setItem('user',JSON.stringify(json))
       dispatch({type:'LOGIN',payload:json})
       setIsLoading(false)
       setSucces(true)
     }
  }

  return (
    <div className="login_signup_form d-flex justify-content-center align-items-center">
      <Form onSubmit={handleSubmit} className="rounded p-4 p-sm-3">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(e)=> setEmail(e.target.value)} value={email}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} value={password}/>
        </Form.Group>

        {!isLoading &&
              <Button variant="danger" type="submit">
                Login
              </Button>
        }
        {succes && 
              <Alert key="success" variant="success" style={{marginTop:"20px"}}>
                 Logged successfully
              </Alert>
        }
        {error && 
              <Alert key="danger" variant="danger" style={{marginTop:"20px"}}>
                {error}
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

export default Login