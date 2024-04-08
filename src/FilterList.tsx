import React from "react";
import { ProductType } from "./data";

interface Props {
  items: ProductType[];
}

const FilterList: React.FC<Props> = ({ items }) => {
  return (
    <div className="flex justify-center mt-16">
      <table className="">
        <thead>
          <tr>
            <td className="p-2 border-4  font-semibold">Name</td>
            <td className="p-2 border-4  font-semibold">Type</td>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr>
              <td className="p-2 border-2">{item.name}</td>{" "}
              <td className="p-2 border-2">{item.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FilterList;
