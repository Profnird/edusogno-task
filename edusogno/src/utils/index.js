import axios from "axios";

const updateData = ({ updatedItem, data }) => {
  // Update the item in memory
  const updatedData = data.map((item) =>
    item.id === updatedItem.id ? updatedItem : item
  );
  return updatedData;

  // Write the updated data back to the JSON file (e.g., via an API call)
  // Example: fetch('/updateData', { method: 'POST', body: JSON.stringify(updatedData) })
};

const fetchData = async () => {
  try {
    const response = await axios.get("http://localhost:3001/Events");
    if (response.status === 200) {
      console.log(response.data);
      return response.data;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// Function to delete event data by ID
const deleteEventData = async (eventId) => {
  try {
    const response = await axios.delete(
      `http://localhost:3001/Events/${eventId}`
    );
    if (response && response.status === 200) return response;
  } catch (error) {
    console.error("Error deleting event data:", error);
    throw error; // Re-throw the error to handle it elsewhere if needed
  }
};
const addEventData = async (data) => {
  try {
    const response = await axios.post("http://localhost:3001/Events", data);
    if (response && response.status === 200) return response;
  } catch (error) {
    console.error("Error adding event data:", error);
    throw error; // Re-throw the error to handle it elsewhere if needed
  }
};

export { deleteEventData, fetchData, updateData, addEventData };
