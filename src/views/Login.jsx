import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate()

  const handleLogin = () => {
    // 1. ngirim post request yg berisi body dari? form state
    // 2. simpan tokennya ke localstroage
    localStorage.setItem('access_token', "login")
    // 3. redirect
    navigate('/')
  }

  return (
    <div className="container login">
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
