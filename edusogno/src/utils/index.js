import axios from "axios";

// Function to update event data by ID
const updateEventData = async (eventId, updatedData) => {
  try {
    const response = await axios.put(
      `http://localhost:3001/Events/${eventId}`,
      updatedData
    );
    if (response && response.status === 200) return response;
  } catch (error) {
    console.error("Error updating event data:", error);
    throw error; // Re-throw the error
  }
};

// Function to update event data by ID
const updateUserData = async (userId, updatedData) => {
  try {
    const response = await axios.put(
      `http://localhost:3001/Users/${userId}`,
      updatedData
    );
    if (response && response.status === 200) return response;
  } catch (error) {
    console.error("Error updating event data:", error);
    throw error; // Re-throw the error
  }
};

// fetchdata & fetchusers - could be refactored to use a single code (sake of time made it two )
const fetchUsers = async () => {
  try {
    const response = await axios.get("http://localhost:3001/Users");
    if (response.status === 200) {
      if (response.data) return response.data;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const fetchData = async () => {
  try {
    const response = await axios.get("http://localhost:3001/Events");
    if (response.status === 200) {
      // console.log(response.data);
      if (response.data) return response.data;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const checkUserExists = async (email) => {
  try {
    const users = await fetchUsers();
    if (users && users.length > 0) {
      return users.some((user) => user.email === email);
    }
    return false; // If users array is empty or null
  } catch (error) {
    console.error("Error checking user existence:", error);
    throw error; // Re-throw the error for the caller to handle
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
    throw error; // Re-throw the error
  }
};

const addEventData = async (data) => {
  try {
    const response = await axios.post("http://localhost:3001/Events", data);
    if (response && response.status === 200) return response;
  } catch (error) {
    console.error("Error adding event data:", error);
    throw error; // Re-throw the error
  }
};

export {
  deleteEventData,
  updateEventData,
  fetchData,
  addEventData,
  fetchUsers,
  updateUserData,
  checkUserExists,
};
