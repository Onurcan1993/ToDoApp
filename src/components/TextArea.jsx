import React, { useContext } from "react";
import { FormGroup, Input, Label, Col } from "reactstrap";
import { TodoContext } from "./context/context";

export default function TextArea() {
  const [newDatas, setNewDatas] = useContext(TodoContext);

  return (
    <FormGroup className="flex flex-col" row>
      <Label for="exampleText" sm={2}>
        Explanation
      </Label>
      <Col sm={10}>
        <Input
          placeholder="Add any task for your work"
          id="text"
          name="text"
          type="textarea"
          onChange={(e) => {
            setNewDatas({ ...newDatas, comments: e.target.value });
          }}
          style={{ height: "120px", boxShadow: "none" }}
        />
      </Col>
    </FormGroup>
  );
}
