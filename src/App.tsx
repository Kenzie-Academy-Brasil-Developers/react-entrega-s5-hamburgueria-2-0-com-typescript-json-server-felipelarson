import { ThemeProvider } from "@mui/material/styles";
import { outerTheme } from "./styles";

import Login from "./pages/Login";


function App() {
  return (
    <ThemeProvider theme={outerTheme}>
      <Login />
    </ThemeProvider>
  );
}

export default App;
