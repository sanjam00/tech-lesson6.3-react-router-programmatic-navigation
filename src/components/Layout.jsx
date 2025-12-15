import { Outlet, useNavigate } from "react-router-dom"
import NavBar from "./NavBar"
import { useState, useEffect } from "react"

function Layout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const navigate = useNavigate();

  const login = () => {
    setIsLoggedIn(true)
  }

  const logout = () => {
    setIsLoggedIn(false)
  }

  //add programmatic naviagtion for login and logout
  useEffect(() => {
    if (isLoggedIn) {
      //naviagtes to Home route if user is logged in
      navigate("/")
    } else {
      //navigates to Login route if user is logged out
      navigate("/login")
    }
  }, [isLoggedIn])

  return (
    <div className="layout">
      {/* pass logout for the logout button */}
      <NavBar logout={logout} />

      {/* pass the login function to all routes via useOutletContext */}
      <Outlet context={login} />
    </div>
  )
}

export default Layout
