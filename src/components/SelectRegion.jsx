import React from "react";

function SelectRegion({ children }) {
  return (
    <div className="bg-inherit flex flex-col md:flex-row justify-between items-center ">
      {children}
    </div>
  );
}

export default SelectRegion;
