import React, { useState } from "react";
import TaskInput from "./components/TaskInput";
import FilterButtons from "./components/FilterButtons";
import TaskList from "./components/TaskList";

const App = () => {
  const [title, setTitle] = useState("");
  const [task, setTask] = useState([]);
  const [filter, setFilter] = useState("All");

  // Add Task Conditons----

  const onSubmithandler = (e) => {
    e.preventDefault();

    if (title.trim() === "") {
      alert("⚠️ Your Task is Empty");
    } else {
      const copyTask = [...task];

      copyTask.push({ title, completed: false });

      setTask(copyTask);

      setTitle("");
    }
  };

  //  Check box True -Task Completed----

  const toggleCompleted = (idx) => {
    const updated = [...task];
    updated[idx].completed = !updated[idx].completed;
    setTask(updated);
  };

  //  Clear Task----

  const clear = () => {
    setTask([]);
    setTitle("");
  };

  // Deleted Task----

  const deleteTask = (idx) => {
    const updated = task.filter((_, i) => i !== idx);
    setTask(updated);
  };

  // html code----

  return (
    <div className="w-full min-h-screen bg-blue-600 flex justify-center items-start gap-5 p-5">
      {/* your Task Page */}

      <div className="w-full h-fit bg-gray-200 rounded-xl p-4 sm:w-85 mt-5">
        {/* Add Task Section */}

        <TaskInput
          title={title}
          setTitle={setTitle}
          onSubmithandler={onSubmithandler}
        />
        {/* Your Activity */}

        <FilterButtons filter={filter} setFilter={setFilter} />

        <div className="w-full flex justify-center items-center mt-5">
          <button
            className="bg-red-500 text-white py-2 text-md px-4 rounded-md cursor-pointer active:opacity-80"
            onClick={() => {
              clear();
            }}
          >
            Clear All Tasks
          </button>
        </div>

        {/* Percentage show */}

        <p className="mt-5 text-sm">
          You have 3 task(s) and you completed 33% out of 100%
        </p>

        {/* Your Task List */}

        <TaskList
          task={task}
          toggleCompleted={toggleCompleted}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
};

export default App;
