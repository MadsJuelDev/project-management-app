import { render, cleanup, screen } from "../../../../test-utils";
import { Content } from "../../../components/layout/Content";

beforeEach(cleanup); // cleans the Dom ( from rendered components and inputs)

test("Render The Content Component and ensure that the sidebar generic is present", async () => {
  //Render the content component with custom Renderer with context providers
  render(<Content />);

  //Check if sidebar is Rendered within The content Component
  expect(screen.getByTestId("sidebar")).toBeInTheDocument();

  //Checking for contents of sidebar
  // Generic ( Inbox, Today, Next Seven);
  expect(
    screen.findByText("list", { name: /sidebar__generic/i })
  ).toBeDefined();

  expect(screen.getByTestId("inbox")).toBeInTheDocument();
  expect(screen.getByTestId("today")).toBeInTheDocument();
  expect(screen.getByTestId("next_7")).toBeInTheDocument();
});

test("Render The Component and ensure that the sidebar projects is present", async () => {
  //Render the content component with custom Renderer with context providers
  render(<Content />);

  //Check if sidebar is Rendered within The content Component
  expect(screen.getByTestId("sidebar")).toBeInTheDocument();

  // Projects ( a list of user Projects)  #1 <li>, #2 <h2>
  expect(
    screen.findByText("list", { name: /sidebar__projects/i })
  ).toBeDefined();
  expect(screen.findByText("heading", { name: /Projects/i })).toBeDefined();
});

test("Render The Content Component and ensure that the sidebar Collab projects is present", async () => {
  //Render the content component with custom Renderer with context providers
  render(<Content />);

  //Check if sidebar is Rendered within The content Component
  expect(screen.getByTestId("sidebar")).toBeInTheDocument();

  // Collab Projects ( a list of user Collab Projects); #1 <li> #2 <h2>
  expect(
    screen.findByText("list", { name: /sidebar__collab__projects/i })
  ).toBeDefined();

  expect(
    screen.findByText("heading", { name: /Collab Projects/i })
  ).toBeDefined();
});

test("Render The Content Component and ensure that the content is loading from Inbox", async () => {
  //Render the content component with custom Renderer with context providers
  render(<Content />);

  //Check if sidebar is Rendered within The content Component
  expect(screen.getByTestId("sidebar")).toBeInTheDocument();

  //Content section with tasks
  expect(screen.findByTitle("Inbox")).toBeDefined();

  expect(screen.findAllByTitle("Loading.."));
});
