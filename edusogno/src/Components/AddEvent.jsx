import React from "react";

const AddEvent = () => {
  return (
    <div className="flex mt-5 bg-white shadow-md rounded-2xl p-5 flex-col min-w-72 gap-3 max-w-lg self-center">
      <div className="bg-[#f3f3f3] flex flex-col p-2">
        <p>Title</p>
        <input
          className="w-full border-b-2 border-black bg-inherit"
          type="text"
          placeholder="Title"
        />
      </div>
      <div className="bg-[#f3f3f3] flex flex-col p-2">
        <p>Date</p>
        <input
          className="w-full border-b-2 border-black bg-inherit"
          type="date"
        />
      </div>
      <div className="bg-[#f3f3f3] flex flex-col p-2">
        <p>Link</p>
        <input
          className="w-full border-b-2 border-black bg-inherit"
          type="text"
          placeholder="event link"
        />
      </div>
    </div>
  );
};

export default AddEvent;
