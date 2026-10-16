import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import SkillDetails from "./pages/SkillDetails";

function App() {
  const [skills, setSkills] = useState([]);
  const [sessions, setSessions] = useState([]);

  function addSkill(newSkill) {
    setSkills([...skills, newSkill]);
  }

  function addSession(newSession) {
    setSessions([...sessions, newSession]);
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Dashboard
            skills={skills}
            sessions={sessions}
            addSkill={addSkill}
            addSession={addSession}
          />
        }
      />

      <Route
        path="/skills/:id"
        element={
          <SkillDetails
            skills={skills}
            sessions={sessions}
          />
        }
      />
    </Routes>
  );
}

export default App;