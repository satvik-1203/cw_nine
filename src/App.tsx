import { useEffect, useState } from "react";
import "./App.css";
import FilterList from "./FilterList";
import { products } from "./data";

function App() {
  const [inputString, setInputString] = useState("");
  const [currType, setCurrType] = useState<"Vegetable" | "Fruit" | "All">(
    "All"
  );
  const [status, setStatus] = useState(false);

  const [filteredData, setFilteredData] = useState(products);

  useEffect(() => {
    let currItems = products;

    if (currType != "All") {
      currItems = currItems.filter((item) => item.type == currType);
    }

    if (inputString.trim()) {
      currItems = currItems.filter((item) =>
        item.name
          .toLowerCase()
          .startsWith(inputString.trim().toLocaleLowerCase())
      );
    }

    setFilteredData(currItems);
  }, [inputString, currType]);

  return (
    <div className="px-4 py-4">
      <h1 className="font-bold text-2xl">Dropbox Filter</h1>

      <div className="flex items-center space-x-4 my-8 justify-center">
        <div>
          <input
            placeholder="Filter your options"
            type="text"
            className="border-2 px-4 py-2 rounded outline-gray-400"
            onChange={(e) => {
              setInputString(e.target.value);
            }}
          />
        </div>
        <div>
          <div
            onClick={() => {
              setStatus((prev) => !prev);
            }}
            className="px-4 py-[.65rem] relative cursor-pointer flex space-x-2 items-center text-white rounded bg-gray-400"
          >
            <span> Type</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>

            <div className="absolute top-full rounded -left-2 bg-gray-500">
              {status && (
                <div className="rounded px-4 py-2">
                  <div
                    onClick={() => {
                      setCurrType("All");
                    }}
                    className="px-4 py-2"
                  >
                    All
                  </div>
                  <div
                    onClick={() => {
                      setCurrType("Vegetable");
                    }}
                    className="px-4 py-2"
                  >
                    Vegetable
                  </div>
                  <div
                    onClick={() => {
                      setCurrType("Fruit");
                    }}
                    className="px-4 py-2"
                  >
                    Fruit
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div>
        <FilterList items={filteredData} />
      </div>
    </div>
  );
}

export default App;
