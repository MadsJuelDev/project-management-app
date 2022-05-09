import axios from "axios";
import { useState } from "react";
import {Tasks}  from "./Tasks";

export const StatusLine = ({ id }) => {
  const currentstatus = useState("");

  const changeStatus = () => {
    axios.put("api/tasks/" + id, { Status: currentstatus }).then((res) => {
      if (res.status === 404) {
        window.alert(res.message);
      }
      if (res.status === 500) {
        window.alert(res.message);
      } else {
        console.log("task moved succesfully baby");
      }
    });
  };

  return (
    <div
      className="StatusLine"
      data-testid="StatusLine-action"
      onDragEnd={() => changeStatus()}
    >
      <div className="todo">
        <h2>todo</h2>
        <Tasks/>
      </div>
      <div className="doing">
        <h2>doing</h2>
        
      </div>
      <div className="done">
      <h2>done</h2>
        <Tasks/>
      </div>
    </div>
  );
};
