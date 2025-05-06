import { useState } from "react";
import "./styles.css";

export default function App() {
  const [toggle, setToggle] = useState(true);
  //create a state to toggle button on and off

  //create a toggle function
  const toggleFunction = () => {
    setToggle((prev) => !prev);
  };
  return (
    <div className="App">
      <h1>This is a React Interview Practise</h1>
      <button onClick={toggleFunction}>
        Toggle to - {toggle ? "hide" : "show"}
      </button>
      {toggle ? (
        <p>
          Start editing to see some magic happen! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Dicta veniam ut sunt quidem aperiam.
          Quaerat vero facilis nobis nemo in architecto enim voluptas molestias
          repellat? Voluptatum sed laborum libero excepturi.lorem20
        </p>
      ) : (
        <p>You toggle the button, Please toogle again to see the paragraph</p>
      )}
    </div>
  );
}
