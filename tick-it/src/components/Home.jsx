import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { NavLink, Routes, Route } from 'react-router-dom';
import ConcertsEventList from './ConcertsEventList';
import SportsEventsList from './SportsEventList';
import TheatreEventList from './TheatreEventList';

const Home = () => {
  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');

  const handleToggle = (isOpen, event, metadata) => {
    if (metadata?.source === 'select') {
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
    console.log('Selected:', eventKey);
  };
  
  return (
    <div>
     
      <Dropdown show={show} onToggle={handleToggle} onSelect={handleSelect} >
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {selectedItem}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item tag={NavLink} to="/" eventKey="All Venues">
            All Venues
          </Dropdown.Item>
          
          <Dropdown.Item eventKey="Concerts">
          <NavLink to='/concerts' >
            Concerts
          </NavLink>
          </Dropdown.Item>
          
          <Dropdown.Item eventKey="Sports">
          <NavLink to='/sports' >
            Sports
          </NavLink>
          </Dropdown.Item>
          <Dropdown.Item eventKey="Theatre">
          <NavLink to='/theatre' >
            Theatre
          </NavLink>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
     

      <Routes>
        <Route path="/concerts" element={<ConcertsEventList />} />
        <Route path="/sports" element={<SportsEventsList />} />
        <Route path="/theatre" element={<TheatreEventList />} />
      </Routes>

    </div>
  );
};

export default Home;


