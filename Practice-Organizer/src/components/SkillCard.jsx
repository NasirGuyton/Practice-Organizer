import { Link } from "react-router-dom";

function SkillCard({ skill, sessions }) {
  const skillSessions = sessions.filter(
    (session) => session.skillId === skill.id
  );

  return (
    <div className="skill-card">
      <h2>{skill.name}</h2>

      <p>
        <strong>Goal:</strong> {skill.goal}
      </p>

      <p>
        <strong>Current Bottleneck:</strong> {skill.bottleneck}
      </p>

      <p>
        <strong>Sessions:</strong> {skillSessions.length}
      </p>

      <Link to={`/skills/${skill.id}`}>
        View Skill
      </Link>
    </div>
  );
}

export default SkillCard;