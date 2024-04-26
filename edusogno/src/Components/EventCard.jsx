import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { deleteEventData } from "../utils";

const EventCard = ({ event, onDeleteEvent }) => {
  return (
    <div className="flex gap-y-5 flex-col rounded-xl p-5 bg-white shadow-lg">
      <div className="flex flex-col gap-y-5">
        <h2 className="font-bold text-xl">{event.title}</h2>
        <h3 className="text-base text-[#6c6b6b]">{event.event_date}</h3>
        <a
          href={event.event_url}
          className="py-2 cursor-pointer text-white text-center rounded-md w-full bg-blue-600"
        >
          Join
        </a>
      </div>
      <div className="flex gap-x-4">
        <FontAwesomeIcon
          onClick={() => onDeleteEvent(event)}
          className=" text-red-500"
          icon={faTrash}
        />
        <FontAwesomeIcon className=" text-green-600" icon={faPencil} />
      </div>
    </div>
  );
};

export default EventCard;
