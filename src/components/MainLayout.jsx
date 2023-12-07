import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function MainLayout() {
  return (
    <>
      {/* Tempat halaman aslinya dirender */}
      {/* Dinamis */}
      {/* <div style={{
        display: 'flex',
        flexDirection: 'row'
      }}>

        <ul>
          <li>Sidebar</li>
        </ul>

        <div>
        <Outlet />
        </div>
      </div> */}

      {/* <div>
        <h1>Ini statis</h1>
        <Navbar />
      </div> */}

      <Navbar />
      <Outlet />
    </>
  );
}
