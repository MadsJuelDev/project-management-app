import axios from "axios";
import { useQuery } from "react-query";

// All async axios get requests to the API
const getProjectTasks = async (selectedProject, userAuth) => {
  let token = sessionStorage.getItem("authtoken");
  const { data } = await axios.get(
    `https://heroku-lama-api.herokuapp.com/api/tasks/${userAuth}/false/${selectedProject}`,
    {
      headers: { authtoken: `${token}` },
    }
  );
  return data;
};
const getAllTasks = async (userAuth) => {
  let token = sessionStorage.getItem("authtoken");
  const { data } = await axios.get(
    `https://heroku-lama-api.herokuapp.com/api/tasks/${userAuth}/false/`,
    {
      headers: { authtoken: `${token}` },
    }
  );
  return data;
};
const getNextSeven = async (userAuth) => {
  let token = sessionStorage.getItem("authtoken");
  const { data } = await axios.get(
    `https://heroku-lama-api.herokuapp.com/api/nextweek/nextSeven/${userAuth}/false/`,
    {
      headers: { authtoken: `${token}` },
    }
  );
  return data;
};
const getTodaysTasks = async (userAuth) => {
  let token = sessionStorage.getItem("authtoken");
  const { data } = await axios.get(
    `https://heroku-lama-api.herokuapp.com/api/nextweek/today/${userAuth}/false/`,
    {
      headers: { authtoken: `${token}` },
    }
  );
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
      let token = sessionStorage.getItem("authtoken");
      return await axios.get(
        `https://heroku-lama-api.herokuapp.com/api/projects/collab/${userAuth}`,
        {
          headers: { authtoken: `${token}` },
        }
      );
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
      let token = sessionStorage.getItem("authtoken");
      return await axios.get(
        `https://heroku-lama-api.herokuapp.com/api/projects/all/${userAuth}`,
        {
          headers: { authtoken: `${token}` },
        }
      );
    },
    {
      cacheTime: 0,
      refetchInterval: 500,
    }
  );
  return { data, refetch };
};

export const useProjects = (userAuth) => {
  const { data, refetch } = useQuery(
    ["fetchProjectsAPI", userAuth],
    async () => {
      let token = sessionStorage.getItem("authtoken");
      return await axios.get(
        `https://heroku-lama-api.herokuapp.com/api/projects/userId/${userAuth}`,
        {
          headers: { authtoken: `${token}` },
        }
      );
    },
    {
      cacheTime: 0,
      refetchInterval: 60000,
    }
  );
  return { data, refetch };
};
