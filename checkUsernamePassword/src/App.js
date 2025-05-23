import { useState } from "react";
import "./styles.css";

export default function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  // Object-based credentials
  const userCredentials = {
    michael: "M1ch@elP@ss",
    sarah: "S@r@h2023!",
    john: "J0hnP@ssw0rd",
    linda: "L!nd@P@ss123",
    robert: "R0b3rtPass!",
    emily: "Em!lyP@ss2023",
    daniel: "D@n!3lPass",
    olivia: "0l!v@Pass",
    james: "J@m3sP@ssw0rd",
    sophia: "S0ph!@P@ss123",
  };

  // Array-based credentials
  const userArray = [
    ["alice", "P@ssw0rd1"],
    ["bob", "S3cur3P@ss"],
    ["charlie", "C0mpl3xP@ss2"],
    ["david", "D@v1dP@ss"],
    ["eve", "Eve1234!"],
    ["frank", "Fr@NK!2023"],
    ["grace", "G!r1ceP@ss"],
    ["hannah", "H@nNah2023"],
    ["ian", "I@nP@ssw0rd"],
    ["julia", "Juli@P@ss123"],
  ];
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkName = name.toLowerCase();
    const isArrObject = userCredentials[checkName] === password;
    const isArrArray = userArray.some(
      ([k, v]) => k === checkName && v === password
    );

    if (isArrObject || isArrArray) {
      setMessage("Login is Sucessful");
    } else {
      {
        setMessage("Error in login");
        setError(true);
      }
    }
  };
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            placeholder="enter the name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            placeholder="enter the password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button>Login</button>
      </form>
      {message && (
        <p style={error ? { color: "red" } : { color: "green" }}>{message}</p>
      )}
    </div>
  );
}
