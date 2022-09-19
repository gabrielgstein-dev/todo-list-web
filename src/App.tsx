import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import { ThemeProvider } from 'styled-components';
import { Gateway } from './routes';
import { GlobalStyles, theme } from '@theme';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

function App() {
  console.log(import.meta.env.DEV);
  return (
    <RecoilRoot>
      <Router>
        <ToastContainer />
        <GlobalStyles />
        <ThemeProvider theme={theme}>
          <Gateway />
        </ThemeProvider>
      </Router>
    </RecoilRoot>
  );
}

export default App;
