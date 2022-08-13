import {Container,Nav,Navbar,Button} from 'react-bootstrap'
import App_Logo from '../assets/images/App_Logo.png'
import { useUsersContext } from '../Hooks/useUsersContext'
import { useWorkoutsContext } from '../Hooks/useWorkoutsContext'

function NavigationBar() {

  const {user,dispatch} = useUsersContext()
  const {dispatch : workoutDispatch} = useWorkoutsContext()

  const handleClick = () => {
      localStorage.removeItem('user')
      dispatch({type:'LOGOUT'})
      workoutDispatch({type:'SET_WORKOUTS',payload:null})
  }

  return (
     <header>
        <Navbar bg="light" variant="light">
            <Container>
              <h3>
                <Navbar.Brand href="/">
                  <img
                    alt="App Logo"
                    src={App_Logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                  />{' '}
                  log
                </Navbar.Brand>
              </h3>
              {user && 
                <Nav>
                  <Button variant="outline-danger" style={{marginRight:"10px"}}>Welcome : {user.email}</Button>
                  <Button variant="outline-success" onClick={handleClick}>Logout</Button>
                </Nav>
              }
              {!user && 
                <Nav>
                  <Nav.Link href="/Signup">Signup</Nav.Link>
                  <Nav.Link href="/Login">Login</Nav.Link>
                </Nav>
              }
               
            </Container>
        </Navbar>
     </header>
  )
}

export default NavigationBar