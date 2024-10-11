import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useContext } from "react";
import { TodoContext } from "./context/context";

export default function NameTextFields({ keyName, name }) {
  const [newDatas, setNewDatas] = useContext(TodoContext);

  return (
    <Box
      component="form"
      sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
      noValidate
      autoComplete="off"
    >
      <TextField
        onChange={(e) =>
          setNewDatas({ ...newDatas, [keyName]: e.target.value })
        }
        id="outlined-basic"
        label={name}
        variant="outlined"
      />
    </Box>
  );
}
