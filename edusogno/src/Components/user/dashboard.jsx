import React, { useState } from "react";
import Topbar from "../Topbar";
import EventCard from "../EventCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import AddEvent from "../AddEvent";

const Dashboard = () => {
  const [showAddEvent, setShowAddEvent] = useState(false);
  return (
    <div className="flex bg-cover bg-edusog-image flex-col bg-[#f2f2f2] h-full flex-1 min-h-screen space-y-10">
      <Topbar />
      {/* view events */}
      <div className="flex flex-1 flex-col">
        <h1 className="text-center font-bold text-2xl">
          Ciao NOME ecco i tuoi eventi
        </h1>
        {showAddEvent && <AddEvent />}
        <div className="grid grid-cols-4 gap-5 px-16 py-8">
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
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
