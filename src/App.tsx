import { Button, TextField } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { outerTheme } from "./styles";


function App() {
  return (
    <ThemeProvider theme={outerTheme}>
      <Button variant="contained">Teste</Button>
      <Button variant="contained" color="secondary">Teste</Button>
      <TextField label="Outlined" variant="outlined"/>
    </ThemeProvider>
  );
}

export default App;
