function SessionCard({ session, skills }) {
  const skill = skills.find(
    (skill) => skill.id === session.skillId
  );

  return (
    <div className="session-card">
      <h3>{skill ? skill.name : "Unknown Skill"}</h3>

      <p>
        <strong>Duration:</strong> {session.duration} minutes
      </p>

      <p>
        <strong>Practiced:</strong> {session.practiced}
      </p>

      <p>
        <strong>Mistake:</strong> {session.mistake}
      </p>

      <p>
        <strong>Discovery:</strong> {session.discovery}
      </p>

      <p>
        <strong>Next Test:</strong> {session.nextTest}
      </p>
    </div>
  );
}

export default SessionCard;