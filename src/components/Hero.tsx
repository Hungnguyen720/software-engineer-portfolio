import { facts, profile } from '../data';
import ParticleName from './ParticleName';

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="wrap">
        <div className="hero-copy">
          <p className="eyebrow">{profile.role}</p>
          <ParticleName lines={profile.name} />
          <p className="lede">{profile.lede}</p>
          <div className="hero-actions">
            <a className="btn solid" href="#projects">See projects</a>
            <a className="btn ghost" href={`mailto:${profile.email}`}>Email me</a>
          </div>
        </div>
        <dl className="facts">
          {facts.map((f) => (
            <div key={f.label}>
              <dt className="eyebrow">{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </header>
  );
}
