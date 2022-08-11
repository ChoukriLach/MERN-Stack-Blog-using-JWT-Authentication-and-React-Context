import {Container,Nav,Navbar} from 'react-bootstrap'
import App_Logo from '../assets/images/App_Logo.png'

function NavigationBar() {
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
              <Nav>
                  <Nav.Link href="/Signup">Signup</Nav.Link>
                  <Nav.Link href="/Login">Login</Nav.Link>
              </Nav>
            </Container>
        </Navbar>
     </header>
  )
}

export default NavigationBar