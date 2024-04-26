import React, { useEffect, useState } from "react";
import Topbar from "../Topbar";
import EventCard from "../EventCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import AddEvent from "../AddEvent";
import { addEventData, deleteEventData, fetchData } from "../../utils";

const Dashboard = () => {
  const [eventData, setEventData] = useState([]);
  const [showAddEvent, setShowAddEvent] = useState(false);

  const AsyncFetch = async () => {
    const results = await fetchData();
    if (results.length > 0) {
      setEventData(results);
    }
  };
  useEffect(() => {
    AsyncFetch();
  }, []);

  const handleAddEvent = async (newEvent) => {
    try {
      console.log("dadasd");
      const res = await addEventData(newEvent);
      // After adding event successfully, fetch data again
      AsyncFetch();
    } catch (error) {
      console.error("Error adding event:", error);
    }
  };

  const handleDelete = async (event) => {
    const res = await deleteEventData(event.id);
    if (res) {
      alert(`Deleted ${event.title}`);
      AsyncFetch();
    }
  };

  return (
    <div className="flex bg-cover bg-edusog-image flex-col bg-[#f2f2f2] h-full flex-1 min-h-screen space-y-10">
      <Topbar />
      {/* view events */}
      <div className="flex flex-1 flex-col">
        <h1 className="text-center font-bold text-2xl">
          Ciao NOME ecco i tuoi eventi
        </h1>
        {showAddEvent && (
          <AddEvent onDeleteEvent={handleDelete} onAddEvent={handleAddEvent} />
        )}
        <div className="grid grid-cols-4 gap-5 px-16 py-8">
          {eventData && eventData.length > 0 ? (
            eventData
              .map((event, index) => (
                <EventCard
                  onDeleteEvent={handleDelete}
                  key={event.id}
                  event={event}
                />
              ))
              .reverse()
          ) : (
            <p>No Events created !</p>
          )}
        </div>
      </div>
      <div className=" fixed bottom-4 right-4">
        <div
          onClick={() => setShowAddEvent(!showAddEvent)}
          className=" w-12 h-12 hover:rotate-45 cursor-pointer bg-green-500 text-white rounded-full text-xl flex justify-center items-center shadow-md hover:bg-green-600 hover:transform-translate-y-1 hover:shadow-lg transition duration-300 ease-in-out"
        >
          <FontAwesomeIcon icon={faPlus} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
