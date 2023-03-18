import ReactDOM from 'react-dom/client';
import { SWRConfig } from 'swr';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { swrConfig } from './configs/swrConfigs';

import App from './App';

import theme from './theme';
import { CustomToastContainer } from '@/components';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <SWRConfig value={swrConfig}>
      <App />
    </SWRConfig>
    <CustomToastContainer />
  </ThemeProvider>
);
