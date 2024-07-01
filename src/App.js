//import logo from "./logo.svg";
import { useEffect, useState } from "react";
import CitySearch from "./components/CitySearch";
import EventList from "./components/EventList";
import NumberOfEvents from "./components/NumberOfEvents";
import { getEvents, extractLocations } from "./api";
import "./App.css";
import { mockData } from "./mock-data";

const App = () => {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const fetchData = async () => {
    const allEvents = mockData;
    setEvents(allEvents.slice(0, currentNOE));
    setAllLocations(extractLocations(allEvents));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <CitySearch allLocations={allLocations} />
      <NumberOfEvents />
      <EventList events={events} />
    </div>
  );
};

export default App;
