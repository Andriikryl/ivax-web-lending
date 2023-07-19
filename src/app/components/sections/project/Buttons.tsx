import React from "react";
import Data from "./data";

type DataItem = {
  id: string;
  title: string;
  category: string;
  img: string;
};

type ButtonsProps = {
  filterItem: (category: string) => void;
  setItem: (data: DataItem[]) => void;
  menuItems: string[];
};

const Buttons: React.FC<ButtonsProps> = ({ filterItem, setItem }) => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <button
          className="btn-dark text-white p-1 px-3 mx-5 fw-bold btn"
          onClick={() => setItem(Data)}
        >
          All
        </button>

        <button
          className="btn-warning text-white p-1 mx-5"
          onClick={() => filterItem("DESIGN")}
        >
          DESIGN
        </button>
        <button
          className="btn-warning text-white p-1 px-2 mx-5"
          onClick={() => filterItem("DEVELOPMENT")}
        >
          DEVELOPMENT
        </button>
        <button
          className="btn-warning text-white p-1 mx-5"
          onClick={() => filterItem("MARKETING")}
        >
          MARKETING
        </button>
        <button
          className="btn-warning text-white p-1 mx-5"
          onClick={() => filterItem("TECHNOLOGY")}
        >
          TECHNOLOGY
        </button>
      </div>
    </>
  );
};

export default Buttons;
