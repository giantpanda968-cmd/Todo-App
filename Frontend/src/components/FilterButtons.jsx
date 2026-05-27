import React from "react";

const FilterButtons = ({ filter, setFilter }) => {
  return (
    <div className="w-full h-fit flex justify-evenly items-center mt-5">
      <button
        onClick={() => setFilter("All")}
        className={`py-2 px-4 text-md text-center rounded-md cursor-pointer active:opacity-80 ${filter === "All" ? "bg-linear-to-l from-blue-600 to-blue-500 text-white" : "bg-white text-black"}`}
      >
        All
      </button>

      <button
        onClick={() => setFilter("Pending")}
        className={`py-2 px-4 text-black text-md text-center rounded-md active:opacity-80 cursor-pointer ${filter === "Pending" ? "bg-linear-to-l from-blue-600 to-blue-500 text-white" : "bg-white text-black"}`}
      >
        Pending
      </button>

      <button
        onClick={() => setFilter("Completed")}
        className={`py-2 px-4 text-black text-md text-center rounded-md active:opacity-80 cursor-pointer ${filter === "Completed" ? "bg-linear-to-l from-blue-600 to-blue-500 text-white" : "bg-white text-black"}`}
      >
        Completed
      </button>
    </div>
  );
};

export default FilterButtons;
