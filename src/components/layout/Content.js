import { Sidebar } from "./Sidebar";
// import { Tasks } from "../Tasks";
import { useEffect, useState } from "react";
import { StatusLine } from "../StatusLine";

export const Content = () => {
  useEffect(() => {
    console.log("using effect");
  }, []);

  function moveTask(id, newStatus) {
    ///
  }

  function saveTasksToLocalStorage(tasks) {
    ///
  }

  function loadTasksFromLocalStorage() {
    ///
  }
  return (
    <section className="content">
      <Sidebar />
      <StatusLine />
      {/* <Tasks moveTask={moveTask} status="To Do" /> */}
      {/* <Tasks moveTask={moveTask} status="Doing" />
      <Tasks moveTask={moveTask} status="Done" /> */}
    </section>
  );
};
