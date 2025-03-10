import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="header">
      <Link to="/" className="logo">Sairoop.</Link>
      <nav className="navbar">
        <Link to="/about">About</Link>
        <Link to="/education">Education</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Navbar;