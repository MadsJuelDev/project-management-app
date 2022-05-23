import userEvent from "@testing-library/user-event";
import {
  render,
  cleanup,
  screen,
  fireEvent,
  waitFor,
} from "../../../test-utils";
import { LogFormComponent } from "../../components/FormComponent";

beforeEach(cleanup); // cleans the Dom ( from rendered components and inputs)
afterEach(cleanup);

// This compontent is UI rendered differently with styled compontents in the file.
// Therefor Not All components can be queried in a functional manner.

test("Render Login and Signup Form Component", async () => {
  //Render the component with custom Renderer with context providers
  render(<LogFormComponent />);

  //define a Mock implementation of windows alert function and spy if it exists
  window.alert = jest.spyOn(window, "alert").mockImplementation(() => {});

  // spy on the console.log
  const logSpy = jest.spyOn(console, "log");

  // Expect there to be a Spinning Lama button in the Html Document
  expect(
    screen.getByRole("button", { name: /spinning lama/i })
  ).toBeInTheDocument();

  // Expected there to be a Signup and Login button Being Rendered
  expect(screen.getByRole("button", { name: /Log in/i })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /Sign up/i })).toBeInTheDocument();

  // expected there to be 5 empty Input fields
  expect(screen.getByTestId("login-username-input").value).toBe("");
  expect(screen.getByTestId("login-password-input").value).toBe("");
  expect(screen.getByTestId("signup-username-input").value).toBe("");
  expect(screen.getByTestId("signup-email-input").value).toBe("");
  expect(screen.getByTestId("signup-password-input").value).toBe("");

  // Add username and login login info by changing the value with fireEvent.change
  fireEvent.change(screen.getByTestId("login-username-input"), {
    target: { value: "1234abc" },
  });
  fireEvent.change(screen.getByTestId("login-password-input"), {
    target: { value: "1234abc" },
  });

  // check inputs are as stated above
  expect(screen.getByTestId("login-username-input").value).toBe("1234abc");
  expect(screen.getByTestId("login-password-input").value).toBe("1234abc");

  // click login button
  userEvent.click(screen.getByRole("button", { name: /Log in/i }));

  // wait for a function that console logs with "logged In"
  await waitFor(() => console.log("Logged In"));
  expect(logSpy).toHaveBeenCalledWith("Logged In");

  // wait for a window alert after succesful log in.
  await waitFor(window.alert);
  expect(window.alert).toHaveBeenCalledTimes(1);
});
