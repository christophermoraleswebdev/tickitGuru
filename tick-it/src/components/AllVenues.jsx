import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";

const AllVenues = (props) => {
  const navigate = useNavigate();

  const handleVenueClick = (id) => {
    navigate(`/venues/${id}`);
  };

  return (
    <div className="container">
      <h1>Venues</h1>
      <div className="gallery">
        {props.allVenues.map((venue) => (
          <Card
            key={venue.id}
            className="card"
            style={{ width: "16rem", height: "215px" }}
            onClick={() => handleVenueClick(venue.id)}
          >
            <Card.Img
              variant="top"
              style={{
                minHeight: "140px",
                maxHeight: "140px",
                objectFit: "cover",
              }}
              src={venue.photo_url}
            />
            <Card.Body className="card-body">
              <Card.Title>{venue.name}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AllVenues;
