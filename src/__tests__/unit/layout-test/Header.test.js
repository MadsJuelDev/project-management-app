import { render, cleanup, screen } from "../../../../test-utils";
import { Header } from "../../../components/layout/Header";

beforeEach(cleanup); // cleans the Dom ( from rendered components and inputs)

test("Render the Header Element and ensure import ui elements are present", () => {
  // Render the checkbox Component with regular renderer
  render(<Header />);

  // Query The header div and ensure that an element is inside.
  expect(screen.queryByTestId("header")).not.toBeEmptyDOMElement();

  //Checking for loaded elements like logo image, nav and list icons svg
  expect(screen.getByRole("img", { name: /LaMa/i })).toBeDefined();
  expect(screen.getByTestId("batman-svg")).toBeDefined();
  expect(screen.getByTestId("logout-svg")).toBeDefined();
});
