import { render, cleanup, screen } from "../../../../test-utils";
import { FullPageContent } from "../../../components/layout/FullPageContent";

beforeEach(cleanup); // cleans the Dom ( from rendered components and inputs)

test("Render the full page content and that it is not an empty dom element", () => {
  // Render the checkbox Component with regular renderer
  render(<FullPageContent />);

  // Query The fullpage holder section, and ensure that an element is inside.
  expect(screen.queryByTestId("fullpage-content")).not.toBeEmptyDOMElement();
});
