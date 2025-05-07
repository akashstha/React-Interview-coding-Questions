import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [list, setList] = useState([]);
  const [name, setName] = useState("");
  //call the user list api
  useEffect(() => {
    const callApi = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setList(data);
      } catch (error) {
        console.error("Api Error", error);
      }
    };
    callApi();
  }, []);

  const filter = list.filter((e) => {
    return e.name.toLowerCase().includes(name.toLowerCase());
  });
  {
    console.log("data", filter);
  }
  return (
    <div className="App">
      {/* 
      1. Filter Input
      2. display the list of users
      3. reset Butoon */}
      <h1>Filter Logic</h1>
      <label htmlFor="users">Users:</label>
      <input
        placeholder="enter the user name"
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      <button style={{ margin: "10px" }} onClick={() => setName("")}>
        Reset
      </button>
      <ul>
        <b>List of user: </b>
        {filter.map((e) => {
          return <li key={e.id}>{e?.name}</li>;
        })}
      </ul>
    </div>
  );
}
