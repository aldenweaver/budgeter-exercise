import { expensesData } from './data/expensesData';
import ExpensesDisplay from './components/ExpensesDisplay';

import { Typography } from '@mui/material';

import { ChakraProvider, extendTheme as chakraExtendTheme } from '@chakra-ui/react';
import {
  ThemeProvider as MaterialThemeProvider,
  createTheme as muiCreateTheme,
  THEME_ID,
} from '@mui/material/styles';

const chakraTheme = chakraExtendTheme();
const materialTheme = muiCreateTheme();

function App() {
  return (
    <div className="App">
      <ChakraProvider theme={chakraTheme} resetCSS>
        <MaterialThemeProvider theme={{ [THEME_ID]: materialTheme }}>
            <Typography variant="h3">Budgeter App</Typography>

            <ExpensesDisplay expenses={expensesData}/>
          </MaterialThemeProvider>
        </ChakraProvider>
    </div>
  );
}

export default App;
