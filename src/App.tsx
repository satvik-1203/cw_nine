import { useState } from "react";
import "./App.css";
import FilterList from "./FilterList";
import { products } from "./data";

function App() {
  const [inputString, setInputString] = useState("");
  const [currType, setCurrType] = useState<"Vegetables" | "Fruits" | "All">(
    "All"
  );
  const [status, setStatus] = useState(false);

  return (
    <div className="px-4 py-4">
      <h1 className="font-bold text-2xl">Dropbox Filter</h1>

      <div></div>
      <div>
        <FilterList items={products} />
      </div>
    </div>
  );
}

export default App;
