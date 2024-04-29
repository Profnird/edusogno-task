import React, { useState } from "react";
import { fetchUsers, updateUserData } from "../utils";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleResetPassword = async () => {
    try {
      // Find the user with the provided email
      const users = await fetchUsers();

      const user =
        users &&
        users.length > 0 &&
        (await users.find((user) => user.email === email));

      if (!user) {
        alert("User not found with the provided email.");
        return;
      }

      if (!newPassword) {
        alert("Please enter a new password.");
        return;
      }

      // Update the user's password in the database
      await updateUserData(user.id, { ...user, password: newPassword });

      alert("Password reset successfully.");
      setEmail("");
      setNewPassword("");
    } catch (error) {
      console.error("Error resetting password:", error);
      alert("Failed to reset password. Please try again later.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Reset Password</h1>
      <div className="bg-white shadow-md rounded-md p-4 w-96">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full border border-gray-300 rounded-md p-2 mb-4"
          value={email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Enter your new password"
          className="w-full border border-gray-300 rounded-md p-2 mb-4"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <button
          onClick={handleResetPassword}
          className="bg-blue-500 text-white rounded-md py-2 px-4 w-full hover:bg-blue-600 transition-colors"
        >
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default ResetPassword;
