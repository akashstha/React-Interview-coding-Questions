export const UserList = ({ filterArr }) => {
  return (
    <ul>
      {filterArr.map((e) => {
        return (
          <li>
            <span> {e.name}</span>
            <span> {e.email}</span>
          </li>
        );
      })}
    </ul>
  );
};
