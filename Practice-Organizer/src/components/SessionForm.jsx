import { useState } from "react";

function SessionForm({ skills, addSession }) {
  const [skillId, setSkillId] = useState("");
  const [duration, setDuration] = useState("");
  const [practiced, setPracticed] = useState("");
  const [mistake, setMistake] = useState("");
  const [discovery, setDiscovery] = useState("");
  const [nextTest, setNextTest] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!skillId || !duration || !practiced) {
      alert("Please fill out the required fields.");
      return;
    }

    const newSession = {
  id: Date.now(),
  skillId: Number(skillId),
  date: new Date().toLocaleDateString(),
  duration: Number(duration),
  practiced,
  mistake,
  discovery,
  nextTest,
};

    addSession(newSession);

    setSkillId("");
    setDuration("");
    setPracticed("");
    setMistake("");
    setDiscovery("");
    setNextTest("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Log Practice Session</h2>

      <select
        value={skillId}
        onChange={(event) => setSkillId(event.target.value)}
      >
        <option value="">Select a skill</option>

        {skills.map((skill) => (
          <option key={skill.id} value={skill.id}>
            {skill.name}
          </option>
        ))}
      </select>

      <input
        type="number"
        placeholder="Duration in minutes"
        value={duration}
        onChange={(event) => setDuration(event.target.value)}
      />

      <input
        type="text"
        placeholder="What did you practice?"
        value={practiced}
        onChange={(event) => setPracticed(event.target.value)}
      />

      <input
        type="text"
        placeholder="Main mistake"
        value={mistake}
        onChange={(event) => setMistake(event.target.value)}
      />

      <input
        type="text"
        placeholder="Discovery"
        value={discovery}
        onChange={(event) => setDiscovery(event.target.value)}
      />

      <input
        type="text"
        placeholder="What will you test next?"
        value={nextTest}
        onChange={(event) => setNextTest(event.target.value)}
      />

      <button type="submit">
        Save Session
      </button>
    </form>
  );
}

export default SessionForm;