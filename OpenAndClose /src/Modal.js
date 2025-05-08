import { useState } from "react";
export const Modal = ({ modal, setModal }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const [response, setResponse] = useState(null);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setForm((prev) => {
      return { ...prev, [name]: value };
    });
  };

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
    } catch (error) {
      console.error("API Failure", error);
    }

    console.log("trigger", response);
  };
  return (
    <div style={{ padding: "20px" }}>
      {" "}
      <dialog open={modal}>
        {response ? (
          <div>
            <p>your form is submitted</p>
            {JSON.stringify(response, null, 2)}
          </div>
        ) : (
          <form onSubmit={submitHandler}>
            <div>
              <label>Name: </label>
              <input
                placeholder="enter name"
                type="text"
                name="name"
                value={form.name}
                onChange={changeHandler}
              ></input>
            </div>
            <div style={{ padding: "20px" }}>
              <label htmlFor="email">Email: </label>
              <input
                placeholder="enter email"
                type="email"
                name="email"
                value={form.email}
                onChange={changeHandler}
              ></input>
            </div>
            <button style={{ color: "blue" }} type="submit">
              Submit
            </button>
          </form>
        )}
        <div style={{ padding: "20px" }}>
          <button
            style={{ color: "red" }}
            onClick={() => {
              setModal(false),
                setResponse(null),
                setForm({ name: "", email: "" });
            }}
          >
            Close
          </button>
        </div>
      </dialog>
    </div>
  );
};
