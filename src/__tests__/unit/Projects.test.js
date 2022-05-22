import { render, cleanup, screen } from "../../../test-utils";
import { Projects } from "../../components/Projects";

beforeEach(cleanup); // cleans the Dom ( from rendered components and inputs)

test("Render the Projects component", () => {
  // Arrange Props for Ren
  // Render the Projects Component with custom renderer
  render(<Projects />);

  //Query The Projects li and ensure it is defined in the html.
  expect(screen.queryByTestId("project-action")).toBeDefined();
});
