import { projects, type Project } from '../data';

function Stack({ items }: { items: string[] }) {
  return <div className="stack">{items.map((s) => <span key={s}>{s}</span>)}</div>;
}

function Links({ p }: { p: Project }) {
  return (
    <div className="links">
      {p.links.map((l) => (
        <a
          key={l.href}
          href={l.href}
          {...(l.href.startsWith('http') ? { target: '_blank', rel: 'noopener' } : {})}
        >
          {l.label}
        </a>
      ))}
    </div>
  );
}

function Card({ p }: { p: Project }) {
  return (
    <article className={`sheet${p.featured ? ' featured' : ''}`}>
      <div className="sheet-top">
        <div>
          <span className="eyebrow">{p.category}</span>
          <h3>{p.name}</h3>
        </div>
        <span className={`status ${p.status}`}>{p.statusLabel}</span>
      </div>

      {p.featured ? (
        <div className="featured-body">
          <div>
            <p>{p.summary}</p>
            {p.notes && (
              <ul className="notes">{p.notes.map((n) => <li key={n}>{n}</li>)}</ul>
            )}
          </div>
          <Stack items={p.stack} />
        </div>
      ) : (
        <>
          <p>{p.summary}</p>
          <Stack items={p.stack} />
        </>
      )}
      <Links p={p} />
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <div className="sec-head">
          <h2>Projects</h2>
          <p>Things I have built or am building. Live ones link to the product, the rest link to code.</p>
        </div>
        <div className="sheets">
          {projects.map((p) => <Card key={p.id} p={p} />)}
        </div>
      </div>
    </section>
  );
}
