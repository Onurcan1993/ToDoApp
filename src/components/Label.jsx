import React from "react";
import { Label } from "reactstrap";

function LabelName({ children }) {
  return (
    <Label htmlFor="title" className=" select-none font-medium  bg-inherit">
      {children}
    </Label>
  );
}

export default LabelName;
