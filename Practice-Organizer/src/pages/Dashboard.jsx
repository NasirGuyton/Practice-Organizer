import SkillForm from "../components/SkillForm";
import SkillCard from "../components/SkillCard";
import SessionForm from "../components/SessionForm";
import SessionCard from "../components/SessionCard";

function Dashboard({
  skills,
  sessions,
  addSkill,
  addSession,
}) {
  return (
    <main>
      <h1>Deliberate Practice Dashboard</h1>

      <SkillForm addSkill={addSkill} />

      <section>
        <h2>My Skills</h2>

        {skills.length === 0 ? (
          <p>No skills added yet.</p>
        ) : (
          skills.map((skill) => (
            <SkillCard
              key={skill.id}
              skill={skill}
              sessions={sessions}
            />
          ))
        )}
      </section>

      <SessionForm
        skills={skills}
        addSession={addSession}
      />

      <section>
        <h2>Recent Practice Sessions</h2>

        {sessions.map((session) => (
          <SessionCard
            key={session.id}
            session={session}
            skills={skills}
          />
        ))}
      </section>
    </main>
  );
}

export default Dashboard;