import { render, cleanup, screen } from "../../../test-utils";
import { IndividualProject } from "../../components/IndividualProject";

beforeEach(cleanup); // cleans the Dom ( from rendered components and inputs)

test("Render the AddProject component", () => {
  const project = { name: "ToDo" };
  // Render the AddProject Component with custom renderer
  render(<IndividualProject project={project} />);

  //Query The IndividualCollabProject holder span and ensure that it is set to null.
  expect(screen.queryByTestId("specific-project-name")).toBe(null);
});
test("Render the AddProject component", () => {
  const project = { name: "ToDo" };
  // Render the AddProject Component with custom renderer
  render(<IndividualProject project={project} />);

  //Query important elements for this component to function:
  expect(screen.queryByTestId("delete-project")).toBeDefined();
  expect(screen.queryByTestId("delete-project-button")).toBeDefined();
});

test("Query Important elements", () => {});
