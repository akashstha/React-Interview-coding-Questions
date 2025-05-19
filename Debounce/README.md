 Question: Build a Searchable User List
Prompt:
Create a React component that fetches a list of users from the following API:
👉 https://jsonplaceholder.typicode.com/users

Display the list of users (name and email) on the screen.
Add a search input field at the top. As the user types into the search box, the list should be filtered in real-time by user name.

💡 Requirements:
Use useEffect to fetch data on mount.

Use useState for managing user list and search input.

Display filtered results in real-time.

Show a “Loading…” message while fetching.

Handle and show an error message if the API call fails.

✅ Bonus Points:
Debounce the search input (300ms).

Extract the user list into a separate reusable component.