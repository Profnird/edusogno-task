import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col gap-y-5 items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">EDUSOGNO</h1>
      <div className="flex md:w-1/3 -rotate-12 hover:justify-center transition-all hover:rotate-0 rounded-md p-5 bg-white shadow-lg gap-x-10">
        <a
          href="/auth/login"
          className="bg-black text-white px-5 py-2 rounded-md"
        >
          Login
        </a>
        <a
          href="/auth/register"
          className="border-2 border-black px-5 py-2 rounded-md"
        >
          Register
        </a>
      </div>
    </div>
  );
};

export default Home;
