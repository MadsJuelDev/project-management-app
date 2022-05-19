import { useState, useEffect } from "react";
import axios from "axios";
import { useQuery } from "react-query";

// All async axios get requests to the API
const getProjectTasks = async (selectedProject, userAuth) => {
  const { data } = await axios.get(
    `api/tasks/${userAuth}/false/${selectedProject}`
  );
  return data;
};
const getAllTasks = async (userAuth) => {
  const { data } = await axios.get(`api/tasks/${userAuth}/false/`);
  return data;
};
const getNextSeven = async (userAuth) => {
  const { data } = await axios.get(`api/nextweek/nextSeven/${userAuth}/false/`);
  return data;
};
const getTodaysTasks = async (userAuth) => {
  const { data } = await axios.get(`api/nextweek/today/${userAuth}/false/`);
  return data;
};

// React-query componentes that can be re-used in though out the Tree
export const useTasks = (selectedProject, userAuth) => {
  return useQuery(
    ["fetchProjectTasksAPI", selectedProject, userAuth],
    () => getProjectTasks(selectedProject, userAuth),
    {
      cacheTime: 0,
      refetchInterval: 500,
    }
  );
};

export const useAllTasks = (userAuth) => {
  return useQuery("fetchAllTasksAPI", () => getAllTasks(userAuth), {
    cacheTime: 0,
    refetchInterval: 500,
  });
};

export const useNextSevenTasks = (userAuth) => {
  return useQuery("fetchNextSevenAPI", () => getNextSeven(userAuth), {
    cacheTime: 0,
    refetchInterval: 500,
  });
};

export const useTodayTasks = (userAuth) => {
  return useQuery("fetchTodayTasksAPI", () => getTodaysTasks(userAuth), {
    cacheTime: 0,
    refetchInterval: 500,
  });
};
export const useCollabProjects = (userAuth) => {
  const { data, refetch } = useQuery(
    ["fetchCollabProjectsAPI", userAuth],
    async () => {
      let token = sessionStorage.getItem("auth-token");
      return await axios.get(`api/projects/collab/${userAuth}`, {
        headers: { authtoken: `${token}` },
      });
    },
    {
      cacheTime: 0,
      refetchInterval: 60000,
    }
  );
  return { data, refetch };
};

export const useAllProjects = (userAuth) => {
  const { data, refetch } = useQuery(
    ["fetchAllProjectsAPI", userAuth],
    async () => {
      let token = sessionStorage.getItem("auth-token");
      return await axios.get(`api/projects/all/${userAuth}`, {
        headers: { authtoken: `${token}` },
      });
    },
    {
      cacheTime: 0,
      refetchInterval: 60000,
    }
  );
  return { data, refetch };
};

export const useProjects = (userAuth) => {
  const { data, refetch } = useQuery(
    ["fetchProjectsAPI", userAuth],
    async () => {
      let token = sessionStorage.getItem("auth-token");
      return await axios.get(`api/projects/userId/${userAuth}`, {
        headers: { authtoken: `${token}` },
      });
    },
    {
      cacheTime: 0,
      refetchInterval: 60000,
    }
  );
  return { data, refetch };
};
