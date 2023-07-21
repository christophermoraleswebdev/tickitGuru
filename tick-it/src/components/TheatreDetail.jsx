import { useParams } from 'react-router-dom'

const TheatreDetail = (props) => {
    let { id } = useParams()
    let selectedEvent = props.allTheatre[id]
   return (
    <section className="event-details">
        <img src={selectedEvent.photo_url}/>
        <h3>{selectedEvent.name}</h3>
        <p><strong>Date: </strong>{selectedEvent.date}</p>
        <p><strong>Time: </strong>{selectedEvent.time}</p>
        <p><strong>Venue: </strong>{selectedEvent.venue_name}</p>
    </section>
   ) 
}

export default TheatreDetail