import { useState } from "react";
import "./styles.css";
import { Modal } from "./Modal";

export default function App() {
  // state to open and close
  const [modal, setModal] = useState(false);
  return (
    <div className="App">
      <h1>Modal Component</h1>
      <button onClick={() => setModal((prev) => !prev)}>
        {modal ? "Close modal" : "Open the modal"}
      </button>
      <Modal modal={modal} setModal={setModal} />

      {/* Button to open and close modal
      create a modal Component
      add 2 input forms
      create a submit button
      close modal  */}
      {/* <h2>Start editing to see some magic happen!</h2> */}
    </div>
  );
}
