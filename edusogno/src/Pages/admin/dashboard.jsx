import React, { useEffect, useState } from "react";
import Topbar from "../../Components/Topbar";
import EventCard from "../../Components/EventCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceAngry, faPlus } from "@fortawesome/free-solid-svg-icons";
import AddEvent from "../../Components/AddEvent";
import { addEventData, deleteEventData, fetchData } from "../../utils";

const AdminDashboard = () => {
  const [eventData, setEventData] = useState([]);
  const [showAddEvent, setShowAddEvent] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    // Check if user is logged in and has admin role
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser && loggedInUser.role === "admin") {
      setIsLoggedIn(true);
      setUserRole(loggedInUser.role);
      fetchDataAndUpdateState();
    } else {
      setIsLoggedIn(false);
      setUserRole("");
    }
  }, []);

  const fetchDataAndUpdateState = async () => {
    const results = await fetchData();
    if (results && results.length > 0) {
      setEventData(results);
    }
  };

  const AsyncFetch = async () => {
    const results = await fetchData();
    if (results && results.length > 0) {
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
    <>
      {isLoggedIn && userRole === "admin" ? (
        <div className="flex bg-cover bg-edusog-image flex-col bg-[#f2f2f2] h-full flex-1 min-h-screen space-y-10">
          <Topbar />
          {/* view events */}
          <div className="flex flex-1 flex-col">
            <h1 className="text-center font-bold text-2xl">
              Ciao NOME ecco i tuoi eventi
            </h1>
            {showAddEvent && (
              <AddEvent
                onDeleteEvent={handleDelete}
                onAddEvent={handleAddEvent}
              />
            )}
            <div className="grid md:grid-cols-4 gap-5 px-5 md:px-16 py-8">
              {userRole && eventData && eventData.length > 0 ? (
                eventData
                  .map((event, index) => (
                    <EventCard
                      onDeleteEvent={handleDelete}
                      key={event.id}
                      event={event}
                      fetchdata={AsyncFetch}
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
      ) : (
        <div className="flex min-h-screen justify-center items-center">
          <h1 className="flex text-4xl self-center">
            Access denied! Please login as an admin!
            <FontAwesomeIcon color="red" icon={faFaceAngry} />
          </h1>
        </div>
      )}
    </>
  );
};

export default AdminDashboard;