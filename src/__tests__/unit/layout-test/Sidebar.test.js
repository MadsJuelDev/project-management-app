import { render, cleanup, screen } from "../../../../test-utils";
import { Sidebar } from "../../../components/layout/Sidebar";

beforeEach(cleanup); // cleans the Dom ( from rendered components and inputs)

test("Render the Header Element and ensure import ui elements are present", () => {
  // Render the checkbox Component with regular renderer
  render(<Sidebar />);

  // Query The Sidebar holder div and ensure that an element is inside.
  expect(screen.queryByTestId("sidebar")).not.toBeEmptyDOMElement();

  //EXpect The main List items to be present
  expect(screen.queryByTestId("inbox")).toBeInTheDocument();
  expect(screen.queryByTestId("today")).toBeInTheDocument();
  expect(screen.queryByTestId("next_7")).toBeInTheDocument();
});
