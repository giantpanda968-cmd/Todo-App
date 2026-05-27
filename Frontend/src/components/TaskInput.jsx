import React from "react";

const TaskInput = ({ title, setTitle, onSubmithandler}) => {
  return (
    <form
      className="w-full h-fit flex flex-col gap-5"
      onSubmit={(e) => {
        onSubmithandler(e);
      }}
    >
      <input
        type="text"
        placeholder="Add new task..."
        className="w-full outline-0 border border-blue-300 py-4 sm:py-4  px-3  rounded-md bg-white text-md font-medium"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        
      />

      <button
        className="sm:py-2 py-3 text-white rounded-md bg-linear-to-l from-blue-600 to-blue-500 text-md cursor-pointer active:opacity-80"
        type="submit"
      >
        Add
      </button>
    </form>
  );
};

export default TaskInput;
