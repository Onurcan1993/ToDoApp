import React, { useContext, useEffect, useState } from "react";
import CancelPresentationRoundedIcon from "@mui/icons-material/CancelPresentationRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import ModeEditRoundedIcon from "@mui/icons-material/ModeEditRounded";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";

export default function Task({ item, list, setList }) {
  const deleteHandler = () => {
    const updatedList = list.filter((select) => select !== item);
    setList(updatedList);
    localStorage.setItem("todoList", JSON.stringify(updatedList));
  };

  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <Button
            {...bindTrigger(popupState)}
            className="flex w-4/5 m-auto rounded-md flex-row justify-around  bg-gray-200 hover:bg-gray-500 p-4"
            sx={{ color: "black" }}
          >
            <div className="w-full flex flex-row justify-between items-center">
              <div className="flex flex-row gap-2 items-center">
                <CancelPresentationRoundedIcon
                  className="cursor-pointer rounded-md transition-colors hover:bg-gray-400"
                  onClick={deleteHandler}
                  sx={{ color: "green" }}
                />

                <span>
                  {item.name} : {item.mission}
                </span>
              </div>
              <div className="w-2/5 flex flex-row justify-between items-center">
                <div className="flex items-center gap-2">
                  <AccessTimeRoundedIcon />
                  {item.date}
                </div>
                <div className="flex flex-row items-center gap-x-2">
                  {item.priority === "High" && (
                    <div className="h-5 w-5 rounded-md bg-red-900"></div>
                  )}
                  {item.priority === "Medium" && (
                    <div className="h-5 w-5 rounded-md bg-green-900"></div>
                  )}
                  {item.priority === "Low" && (
                    <div className="h-5 w-5 rounded-md bg-yellow-900"></div>
                  )}
                </div>
              </div>
            </div>
          </Button>
          {item.comments && (
            <Popover
              {...bindPopover(popupState)}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <Typography sx={{ p: 2, color: "green" }}>
                {item.comments}
              </Typography>
            </Popover>
          )}
        </div>
      )}
    </PopupState>
  );
}
