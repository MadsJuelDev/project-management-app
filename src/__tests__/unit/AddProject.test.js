import { render, cleanup, screen } from "../../../test-utils";
import { AddProject } from "../../components/AddProject";

beforeEach(cleanup); // cleans the Dom ( from rendered components and inputs)

test("Render the AddProject component", () => {
  // Arrange Props for Render
  const projectName = "Todo App";

  // Render the AddProject Component with custom renderer
  render(<AddProject projectName={projectName} />);

  //Query The Add Project holder div and ensure that an element is inside.
  expect(screen.queryByTestId("add-project")).not.toBeEmptyDOMElement();

  //Query Elements by Id ( Inputs, buttons, overlays)
  expect(screen.queryByTestId("project-name")).toBeDefined();
  expect(screen.queryByTestId("add-project-submit")).toBeDefined();
  expect(screen.queryByTestId("hide-project-overlay")).toBeDefined();
  expect(screen.queryByTestId("add-project-action")).toBeDefined();
  expect(screen.queryByTestId("add-project__text")).toBeDefined();
});
