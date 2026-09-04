import { profile } from '../data';

export default function Contact() {
  const rows = [
    { href: profile.resume, label: 'Download resume', kind: 'pdf', download: true },
    { href: `mailto:${profile.email}`, label: profile.email, kind: 'email' },
    { href: profile.github, label: profile.github.replace('https://', ''), kind: 'code' },
    {
      href: profile.linkedin,
      label: profile.linkedin.replace('https://www.', '').replace(/\/$/, ''),
      kind: 'profile',
    },
  ];
  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Let's talk</h2>
          <p>
            Open to full-stack and backend roles, remote or hybrid. I reply fast, and I can walk you
            through any project above on a call.
          </p>
        </div>
        <ul>
          {rows.map((r) => (
            <li key={r.kind}>
              <a
                href={r.href}
                {...(r.href.startsWith('http') ? { target: '_blank', rel: 'noopener' } : {})}
                {...(r.download ? { download: 'Hung_Nguyen_Resume.pdf' } : {})}
              >
                {r.label}
              </a>
              <small>{r.kind}</small>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
