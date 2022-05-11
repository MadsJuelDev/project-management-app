import { useState, useEffect } from "react";
import axios from "axios";
import { useQuery } from "react-query";

const getProjectTasks = async (selectedProject) => {
  const { data } = await axios.get(
    `api/tasks/1234abc/false/${selectedProject}`
  );
  return data;
};
const getAllTasks = async () => {
  const { data } = await axios.get("api/tasks/1234abc/false/");
  return data;
};

export const useTasks = (selectedProject) => {
  return useQuery(
    ["fetchProjectTasksAPI", selectedProject],
    () => getProjectTasks(selectedProject),
    {
      cacheTime: 0,
      refetchInterval: 500,
    }
  );
  //
  //
  //
  //
  // console.log(selectedProject);
  // const { isLoading, data, refetch } = useQuery(
  //   "fetchProjectTasksAPI",
  //    () => {
  //     return axios.get(`api/tasks/1234abc/false/${selectedProject}`);
  //   },
  //   {
  //     refetchOnWindowFocus: true,
  //     refetchInterval: 100,
  //     enabled: false, // (!) handle refetchs manually
  //   }
  // );
  // console.log(data);
  // return { data, isLoading, refetch };
  //
  //
  //
  //
  // let [tasks, setTasks] = useState([]);
  // const [archivedTasks, setArchivedTasks] = useState([]);
  // useEffect(() => {
  //   axios.get("api/tasks/1234abc/false/" + selectedProject).then((res) => {
  //     const newTasks = res.data;
  //     if (JSON.stringify(newTasks) !== JSON.stringify(tasks)) {
  //       setTasks(newTasks);
  //     }
  //     setArchivedTasks(newTasks.filter((task) => task.archived !== false));
  //   });
  // }, []);
  // return { tasks, archivedTasks };
};

export const useAllTasks = () => {
  return useQuery("fetchAllTasksAPI", getAllTasks, {
    refetchInterval: 500,
  });

  // let [allTasks, setAllTasks] = useState([]);
  // const [archivedTasks, setArchivedTasks] = useState([]);
  // useEffect(() => {
  //   axios.get("api/tasks/1234abc/false/").then((res) => {
  //     const newAllTasks = res.data;
  //     if (JSON.stringify(newAllTasks) !== JSON.stringify(allTasks)) {
  //       setAllTasks(newAllTasks);
  //     }
  //     setArchivedTasks(newAllTasks.filter((task) => task.archived !== false));
  //   });
  // }, []);
  // return { allTasks, archivedTasks };
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
  const { data } = useQuery("fetchProjectsAPI", () => {
    return axios.get("api/projects/userId/1234abc");
  });
  return { data };
};
