"use client"
import { useState } from "react";
import Login from "../shared/Auth/Login";
import Signup from "../shared/Auth/Signup";

const AuthScreen = ({ setOpen }: { setOpen: (e: boolean) => void }) => {
  const [activeState, setActiveState] = useState("Login");
  return (
    <div className="w-full fixed top-0 bg-[#0b0e0e3c] left-0 h-screen z-50 flex items-center justify-center">
      <div className="w-[450px] bg-slate-900 rounded shadow-sm p-5">

        {activeState === "Login" && <Login setActiveState={setActiveState}/>}
        {activeState === "Signup" && <Signup setActiveState={setActiveState}/>}

      </div>
    </div>
  );
};

export default AuthScreen;
