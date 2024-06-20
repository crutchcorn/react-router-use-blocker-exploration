import { useState } from "react";
import { useAppBlocker } from "../hooks/use-app-blocker.ts";
import { Nav } from "../components/nav.tsx";

function App() {
  const [count, setCount] = useState(0);

  useAppBlocker({
    message: count > 5 ? "You've clicked too many times!" : undefined,
  });

  return (
    <div>
      <Nav />
      <h1>Counter demo</h1>
      <p>
        If the counter's value exceeds 5, it will attempt to prevent you from
        leaving the page
      </p>
      <p>Count: {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment count
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement count
      </button>
    </div>
  );
}

export default App;
