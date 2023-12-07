import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { id } = useParams();

  useEffect(() => {
    setLoading("loading...");
    setError("");
    fetch("https://jsonplaceholder.typicode.com/users/" + id)
      .then((res) => {
        if (!res.ok) throw new Error("Something wrong!");

        return res.json();
      })
      .then((res) => setData(res))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <div className="container">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <table className="table">
            <tr>
              <th width="200">Nama</th>
              <td>{data.name}</td>
            </tr>
            <tr>
              <th>Username</th>
              <td>{data.username}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{data.email}</td>
            </tr>
            <tr>
              <th>Website</th>
              <td>{data.website}</td>
            </tr>
          </table>
        )}
      </div>
    </>
  );
}
