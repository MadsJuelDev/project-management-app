import { render, cleanup, screen } from "../../../test-utils";
import { CheckBox } from "../../components/CheckBox";

beforeEach(cleanup); // cleans the Dom ( from rendered components and inputs)

test("Render Checkbox component", () => {
  // Render the checkbox Component with regular renderer
  render(<CheckBox />);

  // Query The checkbox holder Div, and ensure the checkbox-span element is inside.
  expect(screen.queryByTestId("checkbox-action")).not.toBeEmptyDOMElement();
  expect(screen.findByLabelText("checkbox")).toBeDefined();
});
