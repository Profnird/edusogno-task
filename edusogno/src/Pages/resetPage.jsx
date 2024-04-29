import React, { useState } from "react";

const ResetPassword = () => {
  const [email, setEmail] = useState("");

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleResetPassword = async () => {
    try {
      // Send a request to your backend API to reset the password
      const response = await fetch("http://localhost:3001/resetPassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        alert("Password reset instructions sent to your email.");
        setEmail("");
      } else {
        throw new Error("Failed to reset password.");
      }
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
