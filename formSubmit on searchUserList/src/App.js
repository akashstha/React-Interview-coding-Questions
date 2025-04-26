import { useState } from "react";
import "./styles.css";

export default function App() {
  const users = [
    { id: 1, name: "Akash" },
    { id: 2, name: "John" },
    { id: 3, name: "Sam" },
    { id: 4, name: "Steven" },
  ];
  const [name, setName] = useState("");
  const [searchName, setSearchName] = useState("");

  const nameHandler = (e) => {
    e.preventDefault();
    setSearchName(name); // this update the name
  };

  //filterarray
  const filterarray = users.filter((e) =>
    e.name.toLowerCase().includes(searchName.toLowerCase())
  );

  const resetHandler = (e) => {
    e.preventDefault();
    setSearchName("");
    setName("");
  };

  console.log("filterarray", filterarray);

  return (
    <div style={{ padding: "20px" }}>
      <form onSubmit={nameHandler}>
        <input
          placeholder="search..."
          value={name}
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <button style={{ marginLeft: "10px" }} type="submit">
          submit
        </button>
      </form>
      <button style={{ marginTop: "20px" }} onClick={resetHandler}>
        Reset
      </button>
      {filterarray.length === 0 ? (
        <p>User not found!!</p>
      ) : (
        <ul>
          {filterarray.map((e) => (
            <li key={e.id}>{e.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
