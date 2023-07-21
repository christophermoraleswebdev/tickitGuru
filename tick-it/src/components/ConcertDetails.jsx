import Card from 'react-bootstrap/Card'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const ConcertDetails = (props) => {
  const [event, setEvent] = useState({
    name: 'loading'})


  const { id } = useParams()
  useEffect(() => {
    
    const selectedEvent = props.allConcerts.find((event) => event.id == id)
    setEvent(selectedEvent)
  }, [event])


  return (
    <div className='container'>
      <h1>{event.name}</h1>
      <Card>
        <Card.Img 
          variant="top" 
          src={event.photo_url} 
        />
        <Card.Body>
          <Card.Text>
            <strong>Venue: </strong> {event.venue_name}
            <br></br>
            <strong>Date: </strong> {event.date}
            <br></br>
            <strong>Time: </strong> {event.time}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ConcertDetails