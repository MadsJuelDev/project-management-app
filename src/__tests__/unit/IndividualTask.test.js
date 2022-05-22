import { render, cleanup, screen } from "../../../test-utils";
import { IndividualTask } from "../../components/IndividualTask";

beforeEach(cleanup); // cleans the Dom ( from rendered components and inputs)

test("Render the IndividualTask component", () => {
  const urgency = "";
  const isCollapsed = "";
  const collabIdThree = "";
  const collabIdFour = "";

  const task = [
    { urgency },
    { isCollapsed },
    { collabIdThree },
    { collabIdFour },
  ];
  // Render the IndividualTask Component with custom renderer
  render(<IndividualTask task={task} />);

  //Query The IndividualCollabProject holder span and ensure that it is set to null.
  expect(screen.queryByTestId("task-comp-li")).not.toBeEmptyDOMElement();
});

test("Query Important elements", () => {
  const urgency = "";
  const isCollapsed = "";
  const collabIdThree = "";
  const collabIdFour = "";

  const task = [
    { urgency },
    { isCollapsed },
    { collabIdThree },
    { collabIdFour },
  ];
  // Render the AddProject Component with custom renderer
  render(<IndividualTask task={task} />);

  //Query important elements for this component to function:
  expect(screen.queryByTestId("task-title-input")).toBeDefined();
  expect(screen.queryByTestId("task-desc-textarea")).toBeDefined();
  expect(screen.queryByTestId("low-urgency-toggle")).toBeDefined();
  expect(screen.queryByTestId("medium-urgency-toggle")).toBeDefined();
  expect(screen.queryByTestId("high-urgency-toggle")).toBeDefined();
  expect(screen.queryByTestId("save-task-button")).toBeDefined();
  expect(screen.queryByTestId("move-task-up")).toBeDefined();
  expect(screen.queryByTestId("move-task-down")).toBeDefined();
});
