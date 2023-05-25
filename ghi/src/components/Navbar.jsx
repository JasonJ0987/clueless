import { NavLink } from 'react-router-dom';
import useToken from "@galvanize-inc/jwtdown-for-react";
import '../index.css';

function NavBar() {
  const { logout, token } = useToken();

  return (
    <nav
      className="navbar navbar-expand-lg nabvar-light"
      style={{ minWidth: "100vw", position: "fixed", top: "0", padding: "0" }}
    >
      <div className="container-fluid" style={{ padding: "0" }}>
        <NavLink
          className="navbar-brand ml-5 mr-5"
          style={{ color: "white" }}
          to="/"
        >
          Home
        </NavLink>
        <button
          className="navbar-toggler btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ padding: "0" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            {!token && (
              <li className="nav-item dropdown whitetext">
                <NavLink className="nav-link whitetext" to="/login">
                  Login
                </NavLink>
              </li>
            )}
            {!token && (
              <li className="nav-item dropdown me-4">
                <NavLink className="nav-link whitetext" to="/signup">
                  Sign up
                </NavLink>
              </li>
            )}
            {token && (
              <li className="nav-item dropdown me-4">
                <button className="btn btn-danger" onClick={logout}>
                  Logout <i className="bi bi-box-arrow-left"></i>
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}


export default NavBar;
