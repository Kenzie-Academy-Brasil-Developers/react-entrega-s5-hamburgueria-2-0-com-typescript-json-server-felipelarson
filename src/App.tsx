import { Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { outerTheme } from "./styles";


function App() {
  return (
    <ThemeProvider theme={outerTheme}>
        <Button variant="contained">Teste</Button>
    </ThemeProvider>
  );
}

export default App;
