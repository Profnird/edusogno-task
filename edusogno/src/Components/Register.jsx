import React from "react";

const Register = () => {
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
              placeholder="Mario"
            />
          </div>
          <div className="w-full md:space-y-5">
            <p className="text-base md:text-lg">Inserisci il cognome</p>
            <input
              className="w-full outline-none px-3 py-2 border-b-2 border-black"
              type="text"
              placeholder="Rossi"
            />
          </div>
          <div className="w-full md:space-y-5">
            <p className="text-base md:text-lg">Inserisci l’e-mail</p>
            <input
              className="w-full outline-none px-3 py-2 border-b-2 border-black"
              type="email"
              placeholder="name@example.com"
            />
          </div>
          <div className="w-full md:space-y-5">
            <p className="text-base md:text-lg">Inserisci la password</p>
            <input
              className="w-full outline-none px-3 py-2 border-b-2 border-black"
              type="password"
              placeholder="Scrivila qui"
            />
          </div>
          <button className="shadow-xl md:hover:shadow-sm px-3 py-2 text-white font-bold bg-[#0057FF] rounded-full">
            REGISTRATI
          </button>
        </div>
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
