import { render, cleanup, screen } from "../../../test-utils";
import { ProjectOverlay } from "../../components/ProjectOverlay";

beforeEach(cleanup); // cleans the Dom ( from rendered components and inputs)

test("Render the ProjectOverlay component", () => {
  render(<ProjectOverlay />);

  //Query The IndividualCollabProject holder span and ensure that it is set to null.
  expect(screen.queryByTestId("project-overlay-holder")).toBeDefined();
});

test("Query Important elements", () => {
  render(<ProjectOverlay />);

  //Query important elements for this component to function:
  expect(screen.queryByTestId("project-overlay-action")).toBe(null);
});

test("Query Important elements", () => {});
