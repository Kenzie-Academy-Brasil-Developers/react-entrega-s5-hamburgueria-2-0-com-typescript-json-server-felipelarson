import { ThemeProvider } from "@mui/material/styles";
import { outerTheme } from "./styles";


function App() {
  return (
    <ThemeProvider theme={outerTheme}>

    </ThemeProvider>
  );
}

export default App;
