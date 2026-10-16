import { useState } from "react";

function SkillForm({ addSkill }) {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [bottleneck, setBottleneck] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!name || !goal || !bottleneck) {
      alert("Please fill out every field.");
      return;
    }

    const newSkill = {
      id: Date.now(),
      name: name,
      goal: goal,
      bottleneck: bottleneck,
    };

    addSkill(newSkill);

    setName("");
    setGoal("");
    setBottleneck("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Skill</h2>

      <input
        type="text"
        placeholder="Skill name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <input
        type="text"
        placeholder="Current goal"
        value={goal}
        onChange={(event) => setGoal(event.target.value)}
      />

      <input
        type="text"
        placeholder="Current bottleneck"
        value={bottleneck}
        onChange={(event) => setBottleneck(event.target.value)}
      />

      <button type="submit">Add Skill</button>
    </form>
  );
}

export default SkillForm;