import { useState } from 'react'
import { Form , Button } from 'react-bootstrap'

function Signup() {
  
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()

  const handleSubmit = async (e) => {
     e.preventDefault()
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=> setEmail(e.target.value)} value={email}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} value={password}/>
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Signup
      </Button>
    </Form>
  )
}

export default Signup