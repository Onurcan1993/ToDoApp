import React, { useContext } from "react";
import { TodoContext } from "./context/context";

function TaskHeader() {
  const [newDatas, setNewDatas] = useContext(TodoContext);
  const headerHandler = () => {
    setNewDatas({ ...newDatas, active: true });
  };

  return (
    <div className="flex flex-row justify-between w-4/5 text-xl m-auto border-b-2 py-1 border-gray-200">
      <span className=" py-3 font-medium text-3xl">Tasks</span>
      <button
        onClick={headerHandler}
        className="bg-green-900  items-center px-5 py-3 cursor-pointer hover:bg-green-800 rounded-md flex justify-between gap-4  text-white"
      >
        <span className="bg-none bg-transparent text-3xl">+</span>
        <span className="bg-none bg-transparent">Add Task</span>
      </button>
    </div>
  );
}

export default TaskHeader;
