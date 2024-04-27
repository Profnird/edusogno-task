import React, { useState } from "react";

const UpdateEvent = ({ eventData, cancleUpdate, onUpdateEvent }) => {
  const [updatedEventData, setUpdatedEventData] = useState(eventData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedEventData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    console.log(eventData.id, updatedEventData);
    onUpdateEvent(eventData.id, updatedEventData);
    cancleUpdate();
  };

  return (
    <div className="flex mt-5 bg-white shadow-md rounded-2xl p-5 flex-col min-w-72 gap-3 max-w-lg self-center">
      <div className="flex flex-col gap-y-5">
        <div className="bg-[#f3f3f3] flex flex-col p-2">
          <p>Title</p>
          <input
            className="w-full border-b-2 border-black bg-inherit"
            type="text"
            name="title"
            placeholder="Title"
            value={updatedEventData.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="bg-[#f3f3f3] flex flex-col p-2">
          <p>Date</p>
          <input
            className="w-full border-b-2 border-black bg-inherit"
            type="date"
            name="event_date"
            value={updatedEventData.event_date}
            onChange={handleInputChange}
          />
        </div>
        <div className="bg-[#f3f3f3] flex flex-col p-2">
          <p>Link</p>
          <input
            className="w-full border-b-2 border-black bg-inherit"
            type="text"
            name="event_url"
            placeholder="Event link"
            value={updatedEventData.event_url}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex space-x-5">
          <button
            onClick={handleSubmit}
            className="bg-green-500 rounded-full px-5 py-2"
          >
            Update
          </button>
          <button
            onClick={cancleUpdate}
            className="bg-green-500 rounded-full px-5 py-2"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateEvent;
