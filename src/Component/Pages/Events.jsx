import React, { useState } from "react";
import EventCard from "../../Component/Eventscards/Eventscards";
import all_events from "../../assests/events.json"; 

const EventList = () => {
  const [search, setSearch] = useState("");
  const [filteredEvents, setFilteredEvents] = useState(all_events); 

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);
    const filtered = all_events.filter((event) =>
      event.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredEvents(filtered);
  };

  const handleAddEvent = () => {
    console.log("Add new event");
  };

  return (
    <div className="p-10">
      <h1 className="font-semibold text-4xl mb-6 text-center">College Events</h1>
      <div className="m-5 flex items-center justify-center">
        <label htmlFor="search" className="font-medium">Search Events:</label>
        <input
          type="text"
          placeholder="Search for an event..."
          className="border border-orange-400 rounded-xl w-96 p-3 mx-3 block outline-none"
          value={search}
          onChange={handleSearch}
        />
        <button
          onClick={handleAddEvent}
          className="bg-pink-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Search
        </button>
      </div>
      {filteredEvents.length === 0 ? (
        <p className="text-center text-orange-500">No events found.</p>
      ) : (
        <div className="grid gap-10 md:gap-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}
    </div>
  );
};

export default EventList;
