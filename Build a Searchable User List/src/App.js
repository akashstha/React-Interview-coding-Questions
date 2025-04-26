import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [name, setName] = useState("");
  const [debouce, setDebouce] = useState("");
  const users = [
    { id: 1, name: "Akash" },
    { id: 2, name: "John" },
    { id: 3, name: "Tommy" },
    { id: 4, name: "Steven" },
  ];

  //useEffect to adda dedbouce of 300ms, this is reset the name
  useEffect(() => {
    const handler = setInterval(() => {
      setDebouce(name);
    }, 300);
    return () => {
      clearInterval(handler);
    };
  }, [name]);

  const filteredSearch = users.filter((e) =>
    e.name.toLocaleLowerCase().includes(debouce.toLocaleLowerCase())
  );

  console.log("debounce", filteredSearch);

  return (
    <div className="name">
      <input
        type="text"
        placeholder="search..."
        name={name}
        onChange={(e) => setName(e.target.value)}
      />
      {/* read the filer logic and display the conent */}
      {filteredSearch.length === 0 ? (
        <p>User Not Found </p>
      ) : (
        <ul>
          {filteredSearch.map((e) => (
            <li key={e.id}>{e.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
