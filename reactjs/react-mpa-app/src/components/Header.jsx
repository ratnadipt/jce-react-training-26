import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <h1>My MPA App</h1>

      {/* Navigation */}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
}

export default Header;
