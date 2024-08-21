import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
      ,
    </>
  );
}

export default App;
