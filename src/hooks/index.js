import { useState, useEffect } from "react";
import axios from "axios";
import { useQuery } from "react-query";

// All async axios get requests to the API
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
const getNextSeven = async () => {
  const { data } = await axios.get("api/nextweek/nextSeven/1234abc/false/");
  return data;
};
const getTodaysTasks = async () => {
  const { data } = await axios.get("api/nextweek/today/1234abc/false/");
  return data;
};

// React-query componentes that can be re-used in though out the Tree
export const useTasks = (selectedProject) => {
  return useQuery(
    ["fetchProjectTasksAPI", selectedProject],
    () => getProjectTasks(selectedProject),
    {
      cacheTime: 0,
      refetchInterval: 500,
    }
  );
};

export const useAllTasks = () => {
  return useQuery("fetchAllTasksAPI", getAllTasks, {
    cacheTime: 0,
    refetchInterval: 500,
  });
};

export const useNextSevenTasks = () => {
  return useQuery("fetchNextSevenAPI", getNextSeven, {
    cacheTime: 0,
    refetchInterval: 500,
  });
};

export const useTodayTasks = () => {
  return useQuery("fetchTodayTasksAPI", getTodaysTasks, {
    cacheTime: 0,
    refetchInterval: 500,
  });
};

export const useProjects = () => {
  const { data } = useQuery(
    "fetchProjectsAPI",
    () => {
      return axios.get("api/projects/userId/1234abc");
    },
    {
      cacheTime: 0,
      refetchInterval: 500,
    }
  );
  return { data };
};
