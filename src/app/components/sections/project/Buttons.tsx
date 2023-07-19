import React from "react";
import Data from "./data";
import style from "./style.module.css";

type DataItem = {
  id: string;
  title: string;
  category: string;
  img: string;
};

type CategoryCount = {
  [category: string]: number;
};

type ButtonsProps = {
  filterItem: (category: string) => void;
  setItem: (data: DataItem[]) => void;
  menuItems: string[];
};

const Buttons: React.FC<ButtonsProps> = ({ filterItem, setItem }) => {
  const getCategoryCount = (data: DataItem[]): CategoryCount => {
    return data.reduce((acc: CategoryCount, curr) => {
      acc[curr.category] = (acc[curr.category] || 0) + 1;
      return acc;
    }, {});
  };

  const categoryCount = getCategoryCount(Data);

  return (
    <>
      <button className={style.button} onClick={() => setItem(Data)}>
        All <span className={style.button__amount}>{Data.length}</span>
      </button>
      <button className={style.button} onClick={() => filterItem("DESIGN")}>
        DESIGN{" "}
        <span className={style.button__amount}>
          {categoryCount["DESIGN"] || 0}
        </span>
      </button>
      <button
        className={style.button}
        onClick={() => filterItem("DEVELOPMENT")}
      >
        DEVELOPMENT{" "}
        <span className={style.button__amount}>
          {categoryCount["DEVELOPMENT"] || 0}
        </span>
      </button>
      <button className={style.button} onClick={() => filterItem("MARKETING")}>
        MARKETING{" "}
        <span className={style.button__amount}>
          {categoryCount["MARKETING"] || 0}
        </span>
      </button>
      <button className={style.button} onClick={() => filterItem("TECHNOLOGY")}>
        TECHNOLOGY{" "}
        <span className={style.button__amount}>
          {categoryCount["TECHNOLOGY"] || 0}
        </span>
      </button>
    </>
  );
};

export default Buttons;
