import { render, cleanup, screen } from "../../../test-utils";
import { CollabProjects } from "../../components/CollabProjects";

beforeEach(cleanup); // cleans the Dom ( from rendered components and inputs)

test("Render the CollabProjects component", () => {
  // Render the CollabProjects Component with regular renderer
  render(<CollabProjects />);

  //Query The CollabProjects li and ensure it is defined in the html.
  expect(screen.queryByTestId("project-action")).toBeDefined();
});
