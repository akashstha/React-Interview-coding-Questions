export const Pagination = ({ setCurrentPage, currentPage, totalPageNo }) => {
  /*  */
  const incrementHandler = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPageNo));
  };

  const decrementHandler = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };
  return (
    <div
      style={{
        display: "flex",
        padding: "20px",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <button onClick={decrementHandler} disabled={currentPage == 1}>
        Prev
      </button>
      {currentPage} of {totalPageNo}
      <button onClick={incrementHandler} disabled={currentPage == totalPageNo}>
        Next
      </button>
    </div>
  );
};
