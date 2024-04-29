import React, { useState } from "react";
import axios from "axios";
import { checkUserExists } from "../utils"; // Import checkUserExists from utils

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegistration = async () => {
    try {
      // Check if user with the provided email already exists
      const userExists = await checkUserExists(formData.email);

      if (userExists) {
        alert(
          "User with this email already exists. Please use a different email."
        );
        return;
      }

      // Add role to the form data
      const userData = { ...formData, role: "user" };

      // Send a request to register a new user
      const response = await axios.post(
        "http://localhost:3001/Users",
        userData
      );

      if (response.status === 201) {
        alert("Registration successful. Please login.");
        // Redirect the user to the login page after successful registration
        window.location.href = "/auth/login";
      } else {
        throw new Error("Registration failed.");
      }
    } catch (error) {
      console.error("Error registering user:", error);
      alert("Failed to register user. Please try again later.");
    }
  };

  return (
    <div className="flex flex-col items-center h-full gap-y-5 flex-1 w-full md:p-5">
      <h1 className="text-2xl font-bold text-center">Crea il tuo account</h1>
      <div className="py-8 px-5 md:p-10 w-full md:w-3/5 rounded-xl shadow-lg flex bg-white flex-col md:space-y-10">
        <div className="flex flex-col gap-y-5 md:gap-y-10 w-full">
          <div className="w-full md:space-y-5">
            <p className="text-base md:text-lg">Inserisci il nome</p>
            <input
              className="w-full outline-none px-3 py-2 border-b-2 border-black"
              type="text"
              name="firstName"
              placeholder="Mario"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div className="w-full md:space-y-5">
            <p className="text-base md:text-lg">Inserisci il cognome</p>
            <input
              className="w-full outline-none px-3 py-2 border-b-2 border-black"
              type="text"
              name="lastName"
              placeholder="Rossi"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div className="w-full md:space-y-5">
            <p className="text-base md:text-lg">Inserisci l’e-mail</p>
            <input
              className="w-full outline-none px-3 py-2 border-b-2 border-black"
              type="email"
              name="email"
              placeholder="name@example.com"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="w-full md:space-y-5">
            <p className="text-base md:text-lg">Inserisci la password</p>
            <input
              className="w-full outline-none px-3 py-2 border-b-2 border-black"
              type="password"
              name="password"
              placeholder="Scrivila qui"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <button
          onClick={handleRegistration}
          className="shadow-xl mt-3 md:mt-0 md:hover:shadow-sm px-3 py-2 text-white font-bold bg-[#0057FF] rounded-full"
        >
          REGISTRATI
        </button>
        <div className="mt-10 self-center">
          Hai già un account?{" "}
          <a href="/auth/login" className="font-bold">
            Accedi
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;
