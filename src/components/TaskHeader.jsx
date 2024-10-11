import React, { useContext } from "react";
import { TodoContext } from "./context/context";

function TaskHeader() {
  const [newDatas, setNewDatas] = useContext(TodoContext);
  const headerHandler = () => {
    setNewDatas({ ...newDatas, active: true });
  };

  return (
    <div className="flex flex-col sm:flex-row sm:justify-between justify-center sm:items-center sm:w-4/5 w-full text-xl m-auto  border-b-2 py-1 border-gray-200">
      <span className=" py-3 font-medium sm:text-3xl text-xl text-center">
        Tasks
      </span>
      <button
        onClick={headerHandler}
        className="bg-green-900  items-center sm:py-4 sm:px-2  cursor-pointer hover:bg-green-800 rounded-md flex sm:justify-between justify-center gap-4  text-white"
      >
        <span className="bg-none bg-transparent sm:text-3xl text-md">+</span>
        <span className="bg-none bg-transparent sm:text-xl text-sm">
          Add Task
        </span>
      </button>
    </div>
  );
}

export default TaskHeader;
