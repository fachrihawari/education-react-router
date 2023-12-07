import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading('loading...')
    setError("");
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error("Something wrong!")

        return res.json()
      })
      .then(res => setData(res))
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }, [url])

  console.log(data)

  return { data, loading, error }
}

export default useFetch