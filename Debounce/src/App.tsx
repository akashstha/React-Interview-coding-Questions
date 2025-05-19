import { useEffect, useState } from "react";
import "./styles.css";
import { UserList } from "./UserList";
interface User {
  name: string;
  email: string;
}

export default function App() {
  /* 
  1. call a api
  2. store api data in user state storge
  3. create a filter logic
  4. create a deconce logic of 300ms
  5. onChange handler
  */
  //  2. store api data in user state storge

  // const [users, setUsers] = useState < User[] > ([]);
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState("");
  const [debounce, setDebounce] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>();

  // 1. call a api

  useEffect(() => {
    const callApi = async () => {
      setLoading(true);
      await new Promise((res) => {
        setTimeout(res, 2000);
      });
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data: User[] = await res.json();
        if (!res.ok) {
          throw new Error("something went wrong");
        }
        setUsers(data);
      } catch (error) {
        console.error("API Failure", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    callApi();
  }, []);

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const res = setTimeout(() => {
      setDebounce(search);
    }, 300);
    return () => clearTimeout(res);
  }, [search]);

  const filterArr = users.filter((e) => {
    return e.name.toLowerCase().includes(debounce.toLowerCase());
  });

  // console.log("search", filterArr);

  if (loading) {
    return <p style={{ textAlign: "center" }}>Loading data</p>;
  }

  return (
    <div className="App">
      <input
        type="text"
        placeholder="enter the user name"
        value={search}
        onChange={onChangeHandler}
      />
      <UserList filterArr={filterArr} />
    </div>
  );
}
