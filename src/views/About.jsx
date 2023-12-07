import { Link, Outlet } from "react-router-dom";

export default function About() {
  return (
    <>
      <div className="container">
        <h1>Hello about page</h1>
        <hr />
        <div>
          <Link to="intensive">Belajar Intensif</Link> |{" "}
          <Link to="hiring-partner">Hiring Partner</Link>
        </div>
        <Outlet />
      </div>
    </>
  );
}
