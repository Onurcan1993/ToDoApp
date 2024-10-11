import { useContext, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { TodoContext } from "./context/context";

export default function BasicSelect() {
  const [newDatas, setNewDatas] = useContext(TodoContext);
  const [inputVal, setInputVal] = useState("");

  return (
    <FormControl fullWidth sx={{ width: "250px" }}>
      <InputLabel id="demo-simple-select-label">Select priority</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={inputVal}
        label="Select priority"
        onChange={(e) => {
          setInputVal(e.target.value);
          setNewDatas({ ...newDatas, priority: e.target.value });
        }}
      >
        <MenuItem value={"High"}>High</MenuItem>
        <MenuItem value={"Medium"}>Medium</MenuItem>
        <MenuItem value={"Low"}>Low</MenuItem>
      </Select>
    </FormControl>
  );
}
