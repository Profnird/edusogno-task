import React, { useState } from "react";
import { addEventData, fetchData } from "../utils";
// import JsonData from "../dummydb.json";
// import { useNavigate } from "react-router-dom";

const AddEvent = ({ onAddEvent }) => {
  //   const [data, setData] = useState(JsonData);
  const [eventData, setEventData] = useState({
    title: "",
    event_date: "",
    event_url: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="flex mt-5 bg-white shadow-md rounded-2xl p-5 flex-col min-w-72 gap-3 max-w-lg self-center">
      <div className="bg-[#f3f3f3] flex flex-col p-2">
        <p>Title</p>
        <input
          className="w-full border-b-2 border-black bg-inherit"
          type="text"
          name="title"
          placeholder="Title"
          onInput={handleInputChange}
        />
      </div>
      <div className="bg-[#f3f3f3] flex flex-col p-2">
        <p>Date</p>
        <input
          className="w-full border-b-2 border-black bg-inherit"
          type="date"
          name="event_date"
          onInput={handleInputChange}
        />
      </div>
      <div className="bg-[#f3f3f3] flex flex-col p-2">
        <p>Link</p>
        <input
          className="w-full border-b-2 border-black bg-inherit"
          type="text"
          name="event_url"
          placeholder="event link"
          onInput={handleInputChange}
        />
      </div>
      <div>
        <button
          onClick={() => onAddEvent(eventData)}
          className="bg-green-500 rounded-full px-5 py-2"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddEvent;
