import React from "react";
import Greeting from "./container/greeting/Greeting";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TaskContainer from "./page/tasks-manager/TasksContainer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Greeting />} />
        <Route
          path="/task-to-do"
          element={<TaskContainer id={""} title={""} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
