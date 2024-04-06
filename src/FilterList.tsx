import React from "react";
import { ProductType } from "./data";

interface Props {
  items: ProductType[];
}

const FilterList: React.FC<Props> = ({ items }) => {
  return (
    <div className="">
      {items.map((item) => (
        <div>
          Name:{item.name}, type: {item.type}
        </div>
      ))}
    </div>
  );
};

export default FilterList;
