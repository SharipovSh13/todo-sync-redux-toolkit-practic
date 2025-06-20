import "./App.css";
// import { useSelector } from "react-redux";
import Test from "./components/test";
import TodoPage from "./features/pages/todoPage";

function App() {
  return (
    <>
      <div className="bg-violet-300/50 font-mono font-bold text-2xl">
        <h1>Page Sync Todo</h1>
      </div>

      <TodoPage />
      <Test />
    </>
  );
}

export default App;
