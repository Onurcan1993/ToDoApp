import SelectRegion from "./SelectRegion";
import NameTextFields from "./inputName";
import CancelPresentationRoundedIcon from "@mui/icons-material/CancelPresentationRounded";
import { useContext } from "react";
import { TodoContext } from "./context/context";
import BasicSelect from "./DropDownSelection";
import TextArea from "./TextArea";
import BasicDatePicker from "./DatePickerUi";

function TaskDetailes({ setList, list }) {
  const [newDatas, setNewDatas] = useContext(TodoContext);

  const onClear = () => {
    setNewDatas({ ...newDatas, active: false });
  };

  const handleAddTask = () => {
    if (!newDatas.name || !newDatas.priority || !newDatas.date) {
      alert("Please fill in the required fields: Name, Priority, Date.");
      return;
    }
    setList([...list, newDatas]);
    setNewDatas({ ...newDatas, active: false });
  };

  return (
    <div className="w-3/5 flex flex-col m-auto  p-4 bg-gray-300 rounded-md gap-y-4">
      <button
        onClick={onClear}
        className="flex flex-row justify-end bg-gray-300"
      >
        <span className="text-2xl font-medium text-green-700 px-2 py-1 bg-gray-300 hover:bg-green-100 cursor-pointer border-none rounded-md">
          <CancelPresentationRoundedIcon />
        </span>
      </button>
      <div className="select-none bg-transparent font-medium text-3xl">
        Task Details
      </div>
      <SelectRegion>
        <NameTextFields keyName="name" name={"Name"} />
        <NameTextFields keyName="mission" name={"Mission"} />
        <BasicSelect />
      </SelectRegion>
      <BasicDatePicker />
      <TextArea />
      <div className="flex items-center justify-end bg-inherit gap-x-3 w-5/6">
        <button
          onClick={handleAddTask}
          className="bg-green-700 hover:bg-green-600 border-1 px-5 py-1 rounded-md border-none text-white"
        >
          Add Task
        </button>
      </div>
    </div>
  );
}

export default TaskDetailes;
