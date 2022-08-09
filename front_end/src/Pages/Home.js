import {useEffect , useState} from 'react'
import { Container , Row , Col , Card , Button} from 'react-bootstrap'


const Home = () => {

  const [workouts,setWorkouts] = useState(null)

  useEffect(()=>{

    const fetchWorkouts = async () => {
        const response = await fetch('/api/workouts/')
        const json = response.json()

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
          <Card className="text-center" style={{marginBottom:"10px"}}>
            <Card.Header>Featured</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
          </Card>
          <Card className="text-center">
            <Card.Header>Featured</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
          </Card>
        </Col>
        <Col sm={4}>
          Form
        </Col>
      </Row>
     </Container>
  )
}

export default Home