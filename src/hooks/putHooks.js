import axios from "axios";

export const moveTask = (id, newStatus) => {
  axios.put("api/tasks/" + id, { status: newStatus }).then((res) => {
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
  axios
    .put("api/tasks/" + id, {
      task: task,
      description: description,
      urgency: urgency,
      status: status,
      isCollapsed: true,
    })
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
  axios.put("api/tasks/" + id, { isCollapsed: false }).then((res) => {
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
