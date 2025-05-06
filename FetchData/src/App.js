import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  //state to store the data
  const [data, setData] = useState([]);
  const [error, setError] = useState();

  // call the api
  useEffect(() => {
    const callApi = async () => {
      try {
        const data = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!data.ok) {
          throw new Error("Data fetch failed");
        }
        const results = await data.json();
        setData(results);
      } catch (message) {
        setError(message);
      }
    };

    callApi();
  }, []);

  return (
    <div className="App">
      <h1>Customer Details:</h1>
      {error && <p>{error}</p>}
      <ul>
        {data.map((e, index) => {
          return (
            <li key={index} style={{ padding: "10px" }}>
              {e.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
