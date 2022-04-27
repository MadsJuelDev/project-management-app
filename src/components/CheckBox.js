import firebase from "firebase/compat/app";

export const CheckBox = ({ id }) => {
  const archiveTask = () => {
    firebase.firestore().collection("Tasks").doc(id).update({
      archived: true,
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
