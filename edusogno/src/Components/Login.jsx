import React, { useState } from "react";
import { fetchUsers } from "../utils";

const Login = () => {
  // const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      // Fetch users data
      const users = await fetchUsers();

      // Find user by email
      console.log(users, "load users");
      const user = await users.find((user) => user.email === email);
      console.log(user, "find - one");

      if (!user) {
        console.log("User not found");
        return;
      }

      // Check if password matches
      if (user.password !== password) {
        console.log("Invalid password");
        return;
      }

      // Redirect based on role
      if (user.role === "user") {
        window.location.href = "/user/dashboard";
      } else if (user.role === "admin") {
        window.location.href = "/admin/dashboard";
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="flex flex-col items-center h-full gap-y-5 flex-1 w-full md:p-5">
      <h1 className="text-2xl font-bold text-center">Hai già un account?</h1>
      <div className="py-8 px-5 md:p-10 w-full md:w-3/5 rounded-xl shadow-lg flex bg-white flex-col md:space-y-10">
        <div className="flex flex-col gap-y-5 md:gap-y-10 w-full">
          <div className="w-full md:space-y-5">
            <p className="text-lg">Inserisci l’e-mail</p>
            <input
              className="w-full outline-none px-3 py-2 border-b-2 border-black"
              type="text"
              placeholder="name@example.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="w-full md:space-y-5">
            <p className="text-lg">Inserisci la password</p>
            <input
              className="w-full outline-none px-3 py-2 border-b-2 border-black"
              type="password"
              placeholder="Scrivila qui"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <a
            onClick={handleLogin}
            className="shadow-xl text-center md:hover:shadow-sm px-3 py-2 text-white font-bold bg-[#0057FF] rounded-full"
          >
            ACCEDI
          </a>
        </div>
        <div className="mt-10 self-center">
          Non hai ancora un profilo?{" "}
          <a href="/auth/register" className="font-bold">
            Registrati
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
