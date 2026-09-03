const links = [
  ['#projects', 'Projects'],
  ['#skills', 'Skills'],
  ['#experience', 'Experience'],
  ['#contact', 'Contact'],
];

export default function Nav() {
  return (
    <nav aria-label="Primary">
      <div className="wrap">
        <a className="mono-mark" href="#top">Hung Nguyen</a>
        <ul>
          {links.map(([href, label]) => (
            <li key={href}><a href={href}>{label}</a></li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
