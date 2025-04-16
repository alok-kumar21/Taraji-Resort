import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="bg-dark text-light py-4">
    <nav className="container">
      <div>
        <h1>My Vacation Stays Website</h1>
      </div>
      <ul className="nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">
            Overview
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/stays">
            Stays
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
