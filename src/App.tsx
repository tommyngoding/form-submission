import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { FormSubmission } from "./pages/FormSubmission";
import { Detail } from "./pages/Detail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form-submission" element={<FormSubmission />} />
        <Route path="/detail/:submissionId" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
