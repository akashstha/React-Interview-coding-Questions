import { useEffect, useState } from "react";
import "./styles.css";
import { Pagination } from "./Pagination";

export default function App() {
  // state to store the list
  const [list, setList] = useState([]);
  //call api
  useEffect(() => {
    const callApi = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setList(data);
      } catch (error) {
        console.error("API", console.error);
      }
    };
    callApi();
  }, []);
  //state to manage the current page
  const [currentPage, setCurrentPage] = useState(1);
  //totalNoOfDisplay
  const totoalNoOfDisplay = 3;
  // totalNoOfDisplayInAPage
  const totalPageNo = Math.ceil(list.length / totoalNoOfDisplay);
  //startIndex
  const StartIndex = (currentPage - 1) * totoalNoOfDisplay;
  console.log("totalNoOfDisplay", StartIndex);
  //arraySlice
  // const arrSlice = list.slice(StartIndex, currentPage + totalPageNo);
  const arrSlice = list.slice(StartIndex, StartIndex + totoalNoOfDisplay);

  return (
    <div className="App">
      {/* 
      Read and display the users(3) from Array Slice
      Pagination
        2. button
        2.handlers
        display the page index */}
      <h1>Pagination Example</h1>
      <ul>
        <b>List of Users:</b>
        {arrSlice.map((e) => {
          return <li key={e.id}>{e.name}</li>;
        })}
      </ul>
      <Pagination
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        totalPageNo={totalPageNo}
      />
    </div>
  );
}
