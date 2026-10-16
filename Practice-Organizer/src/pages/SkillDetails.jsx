import { useParams, Link } from "react-router-dom";
import SessionCard from "../components/SessionCard";

function SkillDetails({ skills, sessions }) {
  const { id } = useParams();

  const skillId = Number(id);

  const skill = skills.find(
    (skill) => skill.id === skillId
  );

  const skillSessions = sessions.filter(
    (session) => session.skillId === skillId
  );

  if (!skill) {
    return (
      <main>
        <h1>Skill not found</h1>

        <Link to="/">
          Back to Dashboard
        </Link>
      </main>
    );
  }

  return (
    <main>
      <Link to="/">
        ← Back to Dashboard
      </Link>

      <h1>{skill.name}</h1>

      <p>
        <strong>Goal:</strong> {skill.goal}
      </p>

      <p>
        <strong>Current Bottleneck:</strong>{" "}
        {skill.bottleneck}
      </p>

      <h2>Session History</h2>

      {skillSessions.length === 0 ? (
        <p>No sessions recorded yet.</p>
      ) : (
        skillSessions.map((session) => (
          <SessionCard
            key={session.id}
            session={session}
            skills={skills}
          />
        ))
      )}
    </main>
  );
}

export default SkillDetails;
