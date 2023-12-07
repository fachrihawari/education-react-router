import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate()

  return (
    <div className="navbar">
      {/* <a href="/">Home</a>
      <a href="/about">About</a> */}

      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>

      <button
      onClick={() => {
          // 1. clear tokennya di localstroage
          localStorage.removeItem('access_token')
          // 2. redirect
          navigate('/login')
        }} >Logout</button>
    </div>
  );
}
