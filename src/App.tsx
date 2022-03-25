import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import DashboardGuard from "./guard/DashboardGuard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
            path="/protected"
            element={
              <DashboardGuard>
                <DashboardPage />
              </DashboardGuard>
            }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
