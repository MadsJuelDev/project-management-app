import { Content } from "./components/layout/Content";
import { Header } from "./components/layout/Header";
import { ProjectsProvider, SelectedProjectProvider } from "./context";
import { ReactQueryDevtools } from "react-query/devtools";
import { useState } from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { FullPageContent } from "./components/layout/FullPageContent";

const queryClient = new QueryClient();

export const App = ({ darkModeDefault = false }) => {
  const [darkMode, setDarkMode] = useState(darkModeDefault);

  return (
    <QueryClientProvider client={queryClient}>
      <SelectedProjectProvider>
        {/* <ProjectsProvider> */}
        <main
          data-testid="application"
          className={darkMode ? "darkmode" : undefined}
        >
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          {/* <Content darkMode={darkMode} setDarkMode={setDarkMode} /> */}
          <FullPageContent />
        </main>
        {/* </ProjectsProvider> */}
      </SelectedProjectProvider>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
};
