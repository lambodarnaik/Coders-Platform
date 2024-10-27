import React, { useState } from "react";
import { Button } from "./components/ui/button";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Home from "./LandingNavbar/Home";
import Login from "./Authentication/Login";
import Signup from "./Authentication/Signup";

const LandPage = () => {
  const buttons = [
    { name: "Home" },
    { name: "Blog" },
    { name: "About Us" },
    { name: "Services" },
    { name: "Contact Us" },
    { name: "Login" },
    { name: "Signup" },
  ];

  const [open, setOpen] = useState(false);
  const [text, setText] = useState("Home");

  const handleClick = (name) => {
    setText(name);
  };

  return (
    <div className="relative h-screen">
      <div className="z-0 inset-0">
        <img
          src="/images/background_img.jpeg"
          alt="Background Image"
          className="w-full min-h-screen absolute inset-0 bg-cover bg-no-repeat opacity-50 z-0"
        />
      </div>
      {/* <div className="absolute inset-0 bg-black opacity-0"></div>{" "} */}
      <nav className="flex justify-between items-center p-5 z-10">
        <header className="flex items-center w-1/2">
          <img
            src="/images/logo2.jpg"
            alt="Company Logo"
            className="md:h-20 h-12"
          />
          <h1 className="text-black font-bold md:text-2xl text-xl ml-2">
            QuantumCode
          </h1>
        </header>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl cursor-pointer md:hidden"
        >
          <FontAwesomeIcon icon={open ? faX : faBars} beatFade />
        </div>
        <ul
          className={`md:flex md:w-full md:h-10 md:justify-around md:rounded-full bg-black md:bg-white md:opacity-80 md:static md:items-center absolute text-text w-60 rounded-l-3xl transform md:transform-none md:transition-none transition-transform duration-500 ease-in-out
            ${
              open ? "top-20 translate-x-0" : "top-[-490px] translate-x-full"
            } right-0 opacity-100 z-10`}
        >
          {buttons.map((button) => (
            <li
              key={button.name}
              className="text-white md:text-black my-2 md:my-0 ml-2 mr-2 md:ml-0 md:mr-0 w-full rounded-3xl"
            >
              <Button
                size="lg"
                variant="none"
                className="w-full md:w-auto px-4 py-2 rounded-full items-center cursor-pointer"
                onClick={() => handleClick(button.name)}
              >
                {button.name}
              </Button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="z-20">
      {text==="Home"&& <Home />}
      {text==="Login" && <Login/>}
      {text==="Signup" && <Signup/>}

      </div>
    </div>
  );
};

export default LandPage;
