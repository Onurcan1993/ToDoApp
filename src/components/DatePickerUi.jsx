import { useState, useContext } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs"; // dayjs import etmemiz gerekiyor
import { TodoContext } from "./context/context";

export default function BasicDatePicker() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [newDatas, setNewDatas] = useContext(TodoContext);

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);

    if (newDate) {
      const formattedDate = newDate.format("YYYY-MM-DD");
      setNewDatas({ ...newDatas, date: formattedDate });
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker
          label="Select a date"
          value={selectedDate}
          onChange={handleDateChange}
          sx={{ width: "200px" }}
          minDate={dayjs()}
        />
      </DemoContainer>

      {selectedDate && (
        <div>Selected Date: {selectedDate.format("YYYY-MM-DD")}</div>
      )}
    </LocalizationProvider>
  );
}
