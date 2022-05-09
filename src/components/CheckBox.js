import axios from "axios";

export const CheckBox = ({ id }) => {
  const archiveTask = () => {
    axios.put("api/tasks/" + id, { archived: true }).then((res) => {
      if (res.status === 404) {
        window.alert(res.message);
      }
      if (res.status === 500) {
        window.alert(res.message);
      } else {
        console.log("task archived succesfully baby");
      }
    });
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
