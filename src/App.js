import { Content } from "./components/layout/Content";
import { Header } from "./components/layout/Header";
import { SelectedProjectProvider, UserContextProvider } from "./context";
import { ReactQueryDevtools } from "react-query/devtools";
import { useState } from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { FullPageContent } from "./components/layout/FullPageContent";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();

export const App = ({ darkModeDefault = false }) => {
  const [darkMode, setDarkMode] = useState(darkModeDefault);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <UserContextProvider>
          <SelectedProjectProvider>
            <main
              data-testid="application"
              className={darkMode ? "darkmode" : undefined}
            >
              <Header darkMode={darkMode} setDarkMode={setDarkMode} />
              <Content darkMode={darkMode} setDarkMode={setDarkMode} />
              <FullPageContent />
            </main>
          </SelectedProjectProvider>
          <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
        </UserContextProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};
