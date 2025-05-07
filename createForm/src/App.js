import { useState } from "react";
import "./styles.css";

export default function App() {
  //state for Form
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  //onChangeHandler
  const onChangeHandler = (e) => {
    console.log("e", e);
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  //stage for response
  const [response, setResponse] = useState(null);
  //submitHandler

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      setResponse(data);
      setForm({
        name: "",
        email: "",
        phone: "",
      });
    } catch (error) {
      console.error("API ERROR", error);
    }
  };
  return (
    <div className="App">
      {/* Form
      3 inpouts Fields
      1 submits */}
      <h1>Submit a Form : </h1>
      <form onSubmit={submitHandler}>
        <div style={{ padding: "10px" }}>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            placeholder="Enter name"
            name="name"
            value={form.name}
            onChange={onChangeHandler}
          ></input>
        </div>
        <div style={{ padding: "10px" }}>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            placeholder="enter your email"
            name="email"
            value={form.email}
            onChange={onChangeHandler}
          ></input>
        </div>
        <div style={{ padding: "10px" }}>
          <label htmlFor="phone">Phone: </label>
          <input
            type="text"
            placeholder="enter your phone"
            name="phone"
            value={form.phone}
            onChange={onChangeHandler}
          ></input>
          <div style={{ padding: "10px" }}>
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
      {response && (
        <>
          {" "}
          You have submitted the form..
          <div>{JSON.stringify(response, null, 2)}</div>
        </>
      )}
    </div>
  );
}
