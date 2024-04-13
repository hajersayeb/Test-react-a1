import { Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
const NavBar = () => {
    return (
        <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">Home</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link" to="/contact">Contact</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/register">Register</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        <Outlet />
        </>
    )
};
export default NavBar;