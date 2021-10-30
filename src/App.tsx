import { ThemeProvider } from "@mui/material/styles";
import { outerTheme } from "./styles";

import SignUp from "./pages/SignUp";


function App() {
  return (
    <ThemeProvider theme={outerTheme}>
      <SignUp />
    </ThemeProvider>
  );
}

export default App;
