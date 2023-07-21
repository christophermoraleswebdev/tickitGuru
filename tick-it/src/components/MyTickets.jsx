import React from "react";
import { Container, Card } from "react-bootstrap";

const MyTickets = (props) => {
  let tickets = props.userTickets.map((event_id) => {
    return props.allEvents.find((event) => event.id == event_id);
  });

  return tickets ? (
    <Container>
      {" "}
      {tickets.map((ticket) => (
        <Card style={{ maxWidth: "400px" }}>
          <Card.Img
            variant="top"
            src={ticket.photo_url}
            className="w-50 mx-auto"
          />
          <Card.Body>
            <Card.Text>
              <strong>Venue: </strong> {ticket.venue_name}
              <br></br>
              <strong>Date: </strong> {ticket.date}
              <br></br>
              <strong>Time: </strong> {ticket.time}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Container>
  ) : null;
};

export default MyTickets;
