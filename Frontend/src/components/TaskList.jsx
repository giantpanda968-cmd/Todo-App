import React from "react";

const TaskList = ({ task, toggleCompleted, deleteTask }) => {
  return (
    <div className="flex flex-col mt-5 gap-3">
      {task.map((elem, idx) => {
        return (
          <div
            className="w-full bg-white sm:py-3 py-4 px-3 rounded-md flex justify-between items-center"
            key={idx}
          >
            <div className="flex gap-3">
              <input
                type="checkbox"
                className="text-xl"
                onChange={() => {
                  toggleCompleted(idx);
                }}
              />
              <p
                className={`text-md ${elem.completed ? "line-through  text-gray-500" : ""}`}
              >
                {elem.title}
              </p>
            </div>
            <span
              className="text-md text-center rounded-full cursor-pointer active:opacity-80"
              onClick={() => deleteTask(idx)}
            >
              🗑️
            </span>
          </div>
        );
      })}

      {/* percentage Bar */}

      <div className="flex justify-center items-center w-full mt-5">
        <div className="w-55 h-4 sm:h-3 bg-gray-300 rounded-2xl overflow-hidden">
          <div className="w-20 h-full bg-green-400 rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
