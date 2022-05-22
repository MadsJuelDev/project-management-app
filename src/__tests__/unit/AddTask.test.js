import { render, cleanup, screen } from "../../../test-utils";
import { AddTask } from "../../components/AddTask";

beforeEach(cleanup); // cleans the Dom ( from rendered components and inputs)

test("Render the AddCollab component", () => {
  // Arrange Props for Ren
  // Render the checkbox Component with regular renderer
  render(<AddTask />);

  //Query The Add Project holder div and ensure that an element is inside.
  expect(screen.queryByTestId("add-task-comp")).not.toBeEmptyDOMElement();
});

test("Query Important elements", () => {
  render(<AddTask />);
  //Query Elements by Id ( Inputs, buttons, overlays)
  expect(screen.queryByTestId("show-main-action")).toBeDefined();
  expect(screen.queryByTestId("add-task-main")).toBeDefined();
  expect(screen.queryByTestId("quick-add-task")).toBeDefined();
  expect(screen.queryByTestId("add-task-content")).toBeDefined();
  expect(screen.queryByTestId("add-task-button")).toBeDefined();
});
