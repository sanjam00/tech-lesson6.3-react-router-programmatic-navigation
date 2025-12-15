import { NavLink } from "react-router-dom"
import "./NavBar.css"

function NavBar({ logout }) {

  return (
    <nav>
      <NavLink
        to="/"
        className="nav-link"
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className="nav-link"
      >
        About
      </NavLink>
      <NavLink>
        {/* Add a button with the logout function to handle the onClick event */}
        <button onClick={logout}>Logout</button>
      </NavLink>
    </nav>
  )
}

export default NavBar
