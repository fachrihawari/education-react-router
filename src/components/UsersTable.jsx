import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../constants";

export default function UsersTable() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading("loading...");
    setError("");
    fetch(BASE_URL + "/users")
      .then((res) => {
        if (!res.ok) throw new Error("Something wrong!");

        return res.json();
      })
      .then((res) => setData(res))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  console.log(data);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>No</th>
          <th>Nama</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              {/* <a href={`/${user.id}`}>Lihat Detail</a> */}
              <Link to={`/users/${user.id}`}>Lihat Detail</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
