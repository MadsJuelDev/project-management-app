import { Content } from "./components/layout/Content";
import { Header } from "./components/layout/Header";
import { SelectedProjectProvider, useUserContextValue } from "./context";
import { ReactQueryDevtools } from "react-query/devtools";
import { useState } from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { FullPageContent } from "./components/layout/FullPageContent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProfileContent } from "./components/layout/ProfileContent";

const queryClient = new QueryClient();

export const App = ({ darkModeDefault = false }) => {
  const [darkMode, setDarkMode] = useState(darkModeDefault);
  const { userAuth } = useUserContextValue();
  let savedUser = localStorage.getItem("username");

  return (
    <QueryClientProvider client={queryClient}>
      <SelectedProjectProvider>
        <BrowserRouter>
          <main
            data-testid="application"
            className={darkMode ? "darkmode" : undefined}
          >
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            <Routes>
              {(userAuth || savedUser) && (
                <Route
                  path="/"
                  element={
                    <Content darkMode={darkMode} setDarkMode={setDarkMode} />
                  }
                />
              )}
              {!userAuth && <Route path="/" element={<FullPageContent />} />}
              {/* {!userAuth && <Route path="/" element={<ProfileContent />} />} */}
            </Routes>
          </main>
        </BrowserRouter>
      </SelectedProjectProvider>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
};
