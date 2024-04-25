import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col border-2 h-full flex-1 w-full p-5">
      <h1 className=" text-2xl font-bold text-center">Hai già un account?</h1>
      <div className="border-2">
        <div>
          <div>
            <p>Inserisci l’e-mail</p>
            <input type="text" placeholder="name@example.com" />
          </div>
          <div>
            <p>Inserisci la password</p>
            <input type="text" placeholder="Scrivila qui" />
          </div>
          <button>something</button>
        </div>
        <p>Non hai ancora un profilo? Registrati</p>
      </div>
    </div>
  );
};

export default Login;
