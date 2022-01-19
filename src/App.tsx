import { Suspense } from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import theme from './theme/theme';
import { Loader } from './components';
import { Router } from './Router';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Provider store={store}>
          <div className="App">
            <Suspense fallback={<Loader />}>
              <Switch>
                <Router />
              </Switch>
            </Suspense>
          </div>
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
