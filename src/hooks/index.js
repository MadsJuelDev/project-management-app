import { useState, useEffect } from "react";
import axios from "axios";
import { useSelectedProjectValue } from "../context";
import moment from "moment";

export const useTasks = (selectedProject) => {
  let [tasks, setTasks] = useState([]);
  const [archivedTasks, setArchivedTasks] = useState([]);

  useEffect(() => {
    axios.get("api/tasks/1234abc/false/" + selectedProject).then((res) => {
      const newTasks = res.data;

      if (JSON.stringify(newTasks) !== JSON.stringify(tasks)) {
        setTasks(newTasks);
      }
      setArchivedTasks(newTasks.filter((task) => task.archived !== false));
    });
  }, [selectedProject]);

  return { tasks, archivedTasks };
};

export const useAllTasks = () => {
  let [allTasks, setAllTasks] = useState([]);
  const [archivedTasks, setArchivedTasks] = useState([]);

  useEffect(() => {
    axios.get("api/tasks/1234abc/false/").then((res) => {
      const newAllTasks = res.data;

      if (JSON.stringify(newAllTasks) !== JSON.stringify(allTasks)) {
        setAllTasks(newAllTasks);
      }
      setArchivedTasks(newAllTasks.filter((task) => task.archived !== false));
    });
  }, []);

  return { allTasks, archivedTasks };
};

export const useNextSevenTasks = () => {
  let [nextSevenTasks, setNextSevenTasks] = useState([]);
  const [archivedTasks, setArchivedTasks] = useState([]);

  useEffect(() => {
    axios.get("api/nextweek/nextSeven/1234abc/false/").then((res) => {
      const newNextSevenTasks = res.data;
      if (
        JSON.stringify(newNextSevenTasks) !== JSON.stringify(nextSevenTasks)
      ) {
        setNextSevenTasks(newNextSevenTasks);
      }
      setArchivedTasks(
        newNextSevenTasks.filter((task) => task.archived !== false)
      );
    });
  }, []);
  return { nextSevenTasks, archivedTasks };
};

export const useTodayTasks = () => {
  let [todayTasks, setTodayTasks] = useState([]);
  const [archivedTasks, setArchivedTasks] = useState([]);

  useEffect(() => {
    axios.get("api/nextweek/today/1234abc/false/").then((res) => {
      const newTodayTasks = res.data;
      if (JSON.stringify(newTodayTasks) !== JSON.stringify(todayTasks)) {
        setTodayTasks(newTodayTasks);
      }
      setArchivedTasks(newTodayTasks.filter((task) => task.archived !== false));
    });
  }, []);
  return { todayTasks, archivedTasks };
};

export const useProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("api/projects/userId/1234abc").then((res) => {
      const allProjects = res.data;

      if (JSON.stringify(allProjects) !== JSON.stringify(projects)) {
        setProjects(allProjects);
      }
    });
  }, [projects]);

  return { projects, setProjects };
};
