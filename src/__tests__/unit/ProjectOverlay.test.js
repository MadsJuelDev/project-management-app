import { render, cleanup, screen } from "../../../test-utils";
import { ProjectOverlay } from "../../components/ProjectOverlay";

beforeEach(cleanup); // cleans the Dom ( from rendered components and inputs)

test("Render the ProjectOverlay component", () => {
  render(<ProjectOverlay />);

  //Query The ProjectOverlay holder div and ensure that it is defined in the HTML.
  expect(screen.queryByTestId("project-overlay-holder")).toBeDefined();
});

test("Query Important elements", () => {
  render(<ProjectOverlay />);

  //Query important elements and expect it to not be rendered.
  expect(screen.queryByTestId("project-overlay-action")).toBe(null);
});
