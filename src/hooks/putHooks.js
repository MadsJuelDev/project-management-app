import axios from "axios";

export const moveTask = (id, newStatus) => {
  let token = sessionStorage.getItem("authtoken");
  axios
    .put(
      "https://heroku-lama-api.herokuapp.com/api/tasks/" + id,
      { status: newStatus },
      {
        headers: { authtoken: `${token}` },
      }
    )
    .then((res) => {
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

export const updateTask = (id, task, description, urgency, status) => {
  let token = sessionStorage.getItem("authtoken");
  axios
    .put(
      "https://heroku-lama-api.herokuapp.com/api/tasks/" + id,
      {
        task: task,
        description: description,
        urgency: urgency,
        status: status,
        isCollapsed: true,
      },
      {
        headers: { authtoken: `${token}` },
      }
    )
    .then((res) => {
      if (res.status === 404) {
        window.alert(res.message);
      }
      if (res.status === 500) {
        window.alert(res.message);
      } else {
        console.log("task updated succesfully baby");
      }
    });
};

export const updateCollapsed = (id) => {
  let token = sessionStorage.getItem("authtoken");
  axios
    .put(
      "https://heroku-lama-api.herokuapp.com/api/tasks/" + id,
      { isCollapsed: false },
      {
        headers: { authtoken: `${token}` },
      }
    )
    .then((res) => {
      if (res.status === 404) {
        window.alert(res.message);
      }
      if (res.status === 500) {
        window.alert(res.message);
      } else {
        console.log("task Collapsed State has been changed succesfully baby");
      }
    });
};

export const updateProjectCollabList = (
  id,
  collabIdOne,
  collabIdTwo,
  collabIdThree,
  collabIdFour
) => {
  let token = sessionStorage.getItem("authtoken");
  axios
    .put(
      "https://heroku-lama-api.herokuapp.com/api/projects/" + id,
      {
        collabIdOne: collabIdOne,
        collabIdTwo: collabIdTwo,
        collabIdThree: collabIdThree,
        collabIdFour: collabIdFour,
      },
      {
        headers: { authtoken: `${token}` },
      }
    )
    .then((res) => {
      if (res.status === 404) {
        window.alert(res.message);
      }
      if (res.status === 500) {
        window.alert(res.message);
      } else {
        console.log("project updated succesfully baby");
      }
    });
};
