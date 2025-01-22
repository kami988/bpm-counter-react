import { flex } from "../styled-system/patterns";
import Counter from "./components/Counter";

function App() {
  return (
    <div
      className={flex({
        alignItems: "center",
        justifyContent: "center",
        fontSize: "2xl",
        fontWeight: "bold",
        width: "screen",
        height: "screen",
      })}
    >
      <Counter />
    </div>
  );
}

export default App;
