import { render, cleanup, screen } from "../../../test-utils";
import { AddCollab } from "../../components/AddCollab";

beforeEach(cleanup); // cleans the Dom ( from rendered components and inputs)

test("Render the AddCollab component", () => {
  // Arrange Props for Render
  const collabIdOne = "";
  const collabIdTwo = "";
  const collabIdThree = "";
  const collabIdFour = "";

  const collab = [
    { collabIdOne },
    { collabIdTwo },
    { collabIdThree },
    { collabIdFour },
  ];
  // Render the checkbox Component with regular renderer
  render(<AddCollab collab={collab} />);

  //Query The header div and ensure that an element is inside.
  expect(screen.queryByTestId("add-collab-comp")).not.toBeEmptyDOMElement();

  // Testing All 4 collab lists are empty and have correct attributes:
  // INPUT 1
  expect(screen.queryByTestId("collabIdOne").value).toBe("");
  expect(screen.queryByTestId("collabIdOne")).toHaveAttribute("type", "text");
  expect(screen.queryByTestId("collabIdOne")).toHaveAttribute(
    "name",
    "collabIdOne"
  );
  // INPUT 2
  expect(screen.queryByTestId("collabIdTwo").value).toBe("");
  expect(screen.queryByTestId("collabIdTwo")).toHaveAttribute("type", "text");
  expect(screen.queryByTestId("collabIdTwo")).toHaveAttribute(
    "name",
    "collabIdTwo"
  );
  // INPUT 3
  expect(screen.queryByTestId("collabIdThree").value).toBe("");
  expect(screen.queryByTestId("collabIdThree")).toHaveAttribute("type", "text");
  expect(screen.queryByTestId("collabIdThree")).toHaveAttribute(
    "name",
    "collabIdThree"
  );
  // INPUT 4
  expect(screen.queryByTestId("collabIdFour").value).toBe("");
  expect(screen.queryByTestId("collabIdFour")).toHaveAttribute("type", "text");
  expect(screen.queryByTestId("collabIdFour")).toHaveAttribute(
    "name",
    "collabIdFour"
  );
});
