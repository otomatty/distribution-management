import { ThemeProvider } from "@/contexts/ThemeContext";
import { RootRoutes } from "./routes";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <RootRoutes />
    </ThemeProvider>
  );
}

export default App;
