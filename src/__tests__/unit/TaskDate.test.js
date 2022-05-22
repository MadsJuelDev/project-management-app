import { render, cleanup, screen } from "../../../test-utils";
import { TaskDate } from "../../components/TaskDate";

beforeEach(cleanup); // cleans the Dom ( from rendered components and inputs)

test("Render the TaskDate component", () => {
  // Render the TaskDate Component with custom renderer
  render(<TaskDate />);

  //This element should not be able to render on its own!!!
  expect(screen.queryByTestId("task-date-holder")).toBe(null);
});
