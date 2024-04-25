import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";

const EventCard = () => {
  return (
    <div className="flex gap-y-5 flex-col rounded-xl p-5 bg-white shadow-lg">
      <div className="flex flex-col gap-y-5">
        <h2 className=" font-bold text-2xl">Event Title</h2>
        <h3 className="text-base text-[#6c6b6b]">19-05-2024</h3>
        <button className="py-2 text-white rounded-md w-full bg-blue-600">
          Join
        </button>
      </div>
      <div className="flex gap-x-4">
        <FontAwesomeIcon className=" text-red-500" icon={faTrash} />
        <FontAwesomeIcon className=" text-green-600" icon={faPencil} />
      </div>
    </div>
  );
};

export default EventCard;
