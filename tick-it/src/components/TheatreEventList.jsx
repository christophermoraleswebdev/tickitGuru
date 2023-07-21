import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { NavLink, Routes, Route } from "react-router-dom";
import ConcertsEventList from "./ConcertsEventList";
import SportsEventsList from "./SportsEventList";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const TheatreEventList = (props) => {
  const navigate = useNavigate();
  const handleTheatreClick = (id) => {
    navigate(`/events/${id}`);
  };

  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const [theatres, setTheatres] = useState([]);

  useEffect(() => {
    setTheatres(props.allEvents.filter((event) => event.type == "Theatre"));
  }, [props]);

  const handleToggle = (isOpen, event, metadata) => {
    if (metadata?.source === "select") {
      event.preventDefault();
    } else {
      setShow(isOpen);
    }
  };

  const handleSelect = (eventKey, event) => {
    event.preventDefault(); // Prevent the default behavior of closing the dropdown
    setShow(false);
    setSelectedItem(eventKey);
    // Handle the selected eventKey
  };
  return (
    <div className="container">
      <h1>Theatre</h1>
      <div className="Dropdown">
        <Dropdown show={show} onToggle={handleToggle} onSelect={handleSelect}>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            Sort by
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item eventKey="All Venues">
              <NavLink to="/">All Venues</NavLink>
            </Dropdown.Item>

            <Dropdown.Item eventKey="Concerts">
              <NavLink to="/events/concerts">Concerts</NavLink>
            </Dropdown.Item>

            <Dropdown.Item eventKey="Sports">
              <NavLink to="/events/sports">Sports</NavLink>
            </Dropdown.Item>

            <Dropdown.Item eventKey="Theatre">
              <NavLink to="/events/theatre">Theatre</NavLink>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        {/* <Routes>
          <Route path="/concerts" element={<ConcertsEventList />} />
          <Route path="/sports" element={<SportsEventsList />} />
          <Route path="/theatre" element={<TheatreEventList />} />
        </Routes> */}
      </div>

      <div className="gallery">
        {theatres.map((theatre) => (
          <Card
            key={theatre.id}
            className="card"
            style={{ width: "17rem", height: "270px", textAlign: "center" }}
            onClick={() => handleTheatreClick(theatre.id)}
          >
            <Card.Img
              variant="top"
              style={{ maxHeight: "140px", objectFit: "cover" }}
              src={theatre.photo_url}
            />
            <Card.Body className="card-body">
              <Card.Title>{theatre.name}</Card.Title>
              <Card.Text>{theatre.date}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TheatreEventList;
