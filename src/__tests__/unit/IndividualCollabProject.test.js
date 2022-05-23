import { render, cleanup, screen } from "../../../test-utils";
import { IndividualCollabProject } from "../../components/IndividualCollabProject";

beforeEach(cleanup); // cleans the Dom ( from rendered components and inputs)

test("Render the IndividualCollabProject component", () => {
  const project = { name: "ToDo" };
  // Render the IndividualCollabProject Component with custom renderer
  render(<IndividualCollabProject project={project} />);

  //Query The IndividualCollabProject holder span and ensure that an element is inside.
  expect(
    screen.queryByTestId("specific-project-name")
  ).not.toBeEmptyDOMElement();
});
