import React from "react";
import HomePage from "./pages/HomePage";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EventPage from "./pages/EventPage";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/event" element={<EventPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
