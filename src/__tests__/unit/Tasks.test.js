import { render, cleanup, screen } from "../../../test-utils";
import { Tasks } from "../../components/Tasks";

beforeEach(cleanup); // cleans the Dom ( from rendered components and inputs)

test("Render the Task component", () => {
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
  // Render the Tasks Component with custom renderer
  render(<Tasks task={task} />);

  //Query The Tasks holder span and ensure that it is set to null.
  expect(screen.queryByTestId("tasks")).not.toBeEmptyDOMElement();
});

test("Query Important element(s)", () => {
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
  // Render the Tasks Component with custom renderer
  render(<Tasks task={task} />);

  //Query important elements for this component to function:
  expect(screen.queryByTestId("project-name")).toBeVisible();
  expect(screen.getByText("Loading..")).toBeInTheDocument();
});
