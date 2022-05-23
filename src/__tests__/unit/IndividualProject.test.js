import { render, cleanup, screen } from "../../../test-utils";
import { IndividualProject } from "../../components/IndividualProject";

beforeEach(cleanup); // cleans the Dom ( from rendered components and inputs)

test("Render the IndividualProject component", () => {
  const project = { name: "ToDo" };
  // Render the IndividualProject Component with custom renderer
  render(<IndividualProject project={project} />);
});

test("Render the IndividualProject component", () => {
  const project = { name: "ToDo" };
  // Render the IndividualProject Component with custom renderer
  render(<IndividualProject project={project} />);

  //Query important elements for this component to function:
  expect(screen.queryByTestId("delete-project")).toBeDefined();
  expect(screen.queryByTestId("delete-project-button")).toBeDefined();
});
