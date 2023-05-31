import "./Header.css";
import { Link as RouterLink } from "react-router-dom";

function Header() {
  return (
    <div className="Header-wrapper">
      <h1>Project Management Board</h1>
      <nav>
        <RouterLink to="/" className="Nav-link">Board</RouterLink>
        |
        <RouterLink to="/backlog" className="Nav-link">Backlog</RouterLink>
      </nav>
    </div>
  );
}

export default Header;
