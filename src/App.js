import { Content } from "./components/layout/Content";
import { Header } from "./components/layout/Header";
import { ProjectsProvider, SelectedProjectProvider } from "./context";
import { useState } from "react";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

export const App = ({ darkModeDefault = false }) => {
  const [darkMode, setDarkMode] = useState(darkModeDefault);

  return (
    <QueryClientProvider client={queryClient}>
      <SelectedProjectProvider>
        <ProjectsProvider>
          <main
            data-testid="application"
            className={darkMode ? "darkmode" : undefined}
          >
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            <Content darkMode={darkMode} setDarkMode={setDarkMode} />
          </main>
        </ProjectsProvider>
      </SelectedProjectProvider>
    </QueryClientProvider>
  );
};
