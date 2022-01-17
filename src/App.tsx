import { Suspense } from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import themeLight from './theme/themeLight';
import themeDark from './theme/themeDark';
import { Loader } from './components';
import { Router } from './Router';

const App = () => {
  const themeMode = true;
  return (
    <ThemeProvider theme={themeMode ? themeDark : themeLight}>
      <BrowserRouter>
        <div className='App'>
          <Suspense fallback={<Loader />}>
            <Switch>
              <Router />
            </Switch>
          </Suspense>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
