import { Sidebar } from "./Sidebar";
import { Tasks } from "../Tasks";
import { useEffect, useState } from "react";

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
      <Tasks moveTask={moveTask} status="To Do" />
    </section>
  );
};
