import { experience } from '../data';

export default function Experience() {
  return (
    <section id="experience" className="history">
      <div className="wrap">
        <div className="sec-head">
          <h2>Experience</h2>
          <p>Most recent first.</p>
        </div>
        <ol>
          {experience.map((r) => (
            <li key={r.title}>
              <span className="when">{r.when}</span>
              <h3 className={r.placeholder ? 'todo' : undefined}>{r.title}</h3>
              <p className={r.placeholder ? 'todo' : undefined}>{r.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
