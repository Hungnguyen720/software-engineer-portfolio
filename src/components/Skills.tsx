import { skills } from '../data';

export default function Skills() {
  return (
    <section id="skills" className="elements">
      <div className="wrap">
        <div className="sec-head">
          <h2>Skills</h2>
          <p>What I work with, and roughly how often.</p>
        </div>
        <div className="tiers">
          {skills.map((g) => (
            <div className="tier" key={g.name}>
              <h3>{g.name}</h3>
              <ul>
                {g.items.map((i) => (
                  <li key={i.skill}>{i.skill}<span>{i.note}</span></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
