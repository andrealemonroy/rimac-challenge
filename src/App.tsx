import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
