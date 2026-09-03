import { profile } from '../data';

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <span>© {new Date().getFullYear()} {profile.name.join(' ')}</span>
        <span>Built with React and Vite.</span>
      </div>
    </footer>
  );
}
