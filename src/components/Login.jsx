import { useState } from "react"
import { useOutletContext } from "react-router-dom"

function Login() {
  //access the login function that is passed as context from Layout.jsx
  const login = useOutletContext()
  const [username, setUsername] = useState("")

  function handleChange(e) {
    setUsername(e.target.value)
  }

  function handleLogin(e) {
    e.preventDefault()
    login()
  }

  return (
    <form onSubmit={handleLogin}>
      <label htmlFor="username">Username</label>
      <div>
        <input
          id="username"
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  )
}

export default Login
