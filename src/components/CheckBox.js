import firebase from "firebase/compat/app";
import axios from "axios";

export const CheckBox = ({ id }) => {
  const archiveTask = async () => {
    let token = sessionStorage.getItem("authtoken");
    console.log(token);

    const res = await fetch(
      "https://heroku-lama-api.herokuapp.com/api/tasks/" + id,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authtoken: `${token}`,
        },
        body: JSON.stringify({ archived: true }),
      }
    );
    if (res.status === 404) {
      window.alert(res.message);
    }
    if (res.status === 500) {
      window.alert(res.message);
    } else {
      console.log("task archived succesfully baby");
    }
  };
  return (
    <div
      className="checkbox-holder"
      data-testid="checkbox-action"
      onClick={() => archiveTask()}
      onKeyDown={(e) => {
        if (e.key === "Enter") archiveTask();
      }}
    >
      <span className="checkbox" />
    </div>
  );
};
