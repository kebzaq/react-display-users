import { useState } from "react";
import { users } from "./users";
import User from "./User";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <h1>r: Display Users</h1>
        <hr />
      </header>
      <div>
        <h2>User names</h2>
        <ul>
          {users.map((user) => {
            return <User user={user} />;
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
