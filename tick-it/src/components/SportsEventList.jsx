import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { NavLink, Routes, Route } from "react-router-dom";
import ConcertsEventList from "./ConcertsEventList";
import TheatreEventList from "./TheatreEventList";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const SportsEventList = (props) => {
  const navigate = useNavigate();
  const handleSportClick = (id) => {
    navigate(`/events/${id}`);
  };

  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const [sports, setSports] = useState([]);

  useEffect(() => {
    setSports(props.allEvents.filter((event) => event.type == "Sports"));
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
    console.log("Selected:", eventKey);
  };

  return (
    <div className="container">
      <h1>Sports</h1>
      <div className="Dropdown">
        <Dropdown show={show} onToggle={handleToggle} onSelect={handleSelect}>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            Sort by:
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
          <Route path="/sports" element={<SportsEventList />} />
          <Route path="/theatre" element={<TheatreEventList />} />
        </Routes> */}
      </div>

      <div className="gallery">
        {sports.map((sport) => (
          <Card
            key={sport.id}
            className="card"
            style={{ width: "17rem", height: "270px", textAlign: "center" }}
            onClick={() => handleSportClick(sport.id)}
          >
            <Card.Img
              variant="top"
              style={{ maxHeight: "140px", objectFit: "cover" }}
              src={sport.photo_url}
            />
            <Card.Body className="card-body">
              <Card.Title>{sport.name}</Card.Title>
              <Card.Text>{sport.date}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SportsEventList;
