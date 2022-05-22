import React from "react";
import { render } from "@testing-library/react";
import { UserContextProvider, SelectedProjectProvider } from "./src/context";
import {} from "@testing-library/user-event";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

const AllTheProviders = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        <SelectedProjectProvider>{children}</SelectedProjectProvider>
      </UserContextProvider>
    </QueryClientProvider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything from all commonly used testing librarys and packages
export * from "@testing-library/react";
export * from "@testing-library/jest-dom";
export * from "@testing-library/user-event";

// override render method
export { customRender as render };
