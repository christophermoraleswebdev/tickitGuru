import { Route, Routes } from "react-router-dom";
import AllVenues from "./AllVenues";
import ConcertsEventList from "./ConcertsEventList";
import SportsEventsList from "./SportsEventList";
import TheatreEventList from "./TheatreEventList";
import EventsListCard from "./EventsListCard";
import { useState, useEffect } from "react";
import axios from "axios";
import ConcertDetails from "./ConcertDetails";
import SportsDetail from "./SportsDetail";
import TheatreDetail from "./TheatreDetail";
import EventDetails from "./EventDetails";
import SignIn from "./SignIn";
import MyTickets from "./MyTickets";

const Main = () => {
  const [allVenues, setAllVenues] = useState([]);
  const [allEvents, setAllEvents] = useState([]);
  const [userTickets, setUserTickets] = useState([]);

  useEffect(() => {
    const getAllVenues = async () => {
      const response = await axios.get(
        `https://tick-it-api-production.up.railway.app/`
      );
      setAllVenues(response.data);
    };
    getAllVenues();

    const getAllEvents = async () => {
      const response = await axios.get(
        `https://tick-it-api-production.up.railway.app/events`
      );
      setAllEvents(response.data);
    };
    getAllEvents();
  }, []);

  return (
    <Routes>
      {/* Home Page / All Venues */}
      <Route path="/" element={<AllVenues allVenues={allVenues} />} />
      {/* Venue Details Page */}
      <Route
        path="/venues/:id"
        element={<EventsListCard allVenues={allVenues} allEvents={allEvents} />}
      />
      {/* Event Details Page */}
      <Route
        path="/events/:eventId"
        element={
          <EventDetails
            allEvents={allEvents}
            userTickets={userTickets}
            setUserTickets={setUserTickets}
          />
        }
      />
      {/* Concert Events Page */}
      <Route
        path="/events/concerts"
        element={<ConcertsEventList allEvents={allEvents} />}
      />
      {/* <Route
        path="/concerts/:id"
        element={<ConcertDetails allEvents={allEvents} />}
      /> */}
      {/* <Route
        path="/concerts/:id/:eventId"
        element={<EventDetails allEvents={allEvents} />}
      /> */}
      <Route
        path="/events/sports"
        element={<SportsEventsList allEvents={allEvents} />}
      />
      {/* <Route
        path="/sports/:id"
        element={<SportsDetail allEvents={allEvents} />}
      />
      <Route
        path="/sports/:id/:eventId"
        element={<EventDetails allEvents={allEvents} />}
      /> */}
      <Route
        path="/events/theatre"
        element={<TheatreEventList allEvents={allEvents} />}
      />
      {/* <Route
        path="/theatre/:id"
        element={<TheatreDetail allEvents={allEvents} />}
      />
      <Route
        path="/theatre/:id/:eventId"
        element={<TheatreDetail allEvents={allEvents} />}
      /> */}
      <Route path="/signin" element={<SignIn />} />

      <Route
        path="/tickets"
        element={<MyTickets allEvents={allEvents} userTickets={userTickets} />}
      />
    </Routes>
  );
};

export default Main;
