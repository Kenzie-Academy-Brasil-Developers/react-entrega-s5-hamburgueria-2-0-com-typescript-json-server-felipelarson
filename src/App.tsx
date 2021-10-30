import { ThemeProvider } from "@mui/material/styles";
import { outerTheme } from "./styles";

import { Routes } from "./routes";


function App() {
  return (
    <ThemeProvider theme={outerTheme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
