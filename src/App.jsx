import Title from "./components/Title";
import TaskDetailes from "./components/TaskDetailes";
import TaskHeader from "./components/TaskHeader";
import { useEffect, useState } from "react";
import { TodoContext } from "./components/context/context";
import Task from "./components/Task";

const data = {
  name: "",
  priority: "",
  comments: "",
  date: "",
  mission: "",
  active: false,
};

export default function App() {
  const [newDatas, setNewDatas] = useState(data);
  const [list, setList] = useState([]);

  useEffect(() => {
    const savedList = localStorage.getItem("todoList");
    if (savedList) {
      setList(JSON.parse(savedList));
    }
  }, []);

  useEffect(() => {
    if (list.length > 0) {
      localStorage.setItem("todoList", JSON.stringify(list));
    }
  }, [list]);

  return (
    <TodoContext.Provider value={[newDatas, setNewDatas]}>
      <div className="flex flex-col justify-center sm:gap-y-4 gap-y-1">
        <Title />
        <TaskHeader />
        {newDatas.active && <TaskDetailes list={list} setList={setList} />}
        {!newDatas.active &&
          list.map((item, index) => (
            <Task key={index} list={list} setList={setList} item={item} />
          ))}
      </div>
    </TodoContext.Provider>
  );
}
