import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { FormSubmission } from "./pages/FormSubmission";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form-submission" element={<FormSubmission />} />
      </Routes>
    </div>
  );
}

export default App;
