import { NavLink, Link } from "react-router-dom";
import logo from "../../img/RickMortyLogo.png";
import { BiUser, BiMoviePlay, BiCurrentLocation } from "react-icons/bi";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{background: "rgba(235, 248, 255, .04)"}}>
      <div className="container">
        <Link to="/" className="navbar-brand fs-3 ubuntu">
          <img
            style={{ height: "3rem" }}
            src={logo}
            alt="Logo Rick and Morty"
          />
        </Link>
        <style jsx="true">
          {`
            button[aria-expanded="false"] > .close {
              display: none;
            }
            button[aria-expanded="true"] > .open {
              display: none;
            }
          `}
        </style>

        {/* Codigo para generar el menu de hamburguesa resposivo */}
        <button
          className="navbar-toggler border-0 bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="fas fa-bars open text-dark"></span>
          <span className="fas fa-times close text-dark"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <NavLink to="/" className="nav-link d-flex align-items-center gap-1">
              <BiUser /> Characters
            </NavLink>
            <NavLink to="/episodes" className="nav-link d-flex align-items-center gap-1">
              <BiMoviePlay /> Episodes
            </NavLink>
            <NavLink
              to="/location"
              className="nav-link d-flex align-items-center gap-1"
              activeClassName="active"
            >
              <BiCurrentLocation /> Locations
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
