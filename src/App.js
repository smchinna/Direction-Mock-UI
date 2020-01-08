import React, { Suspense, lazy } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';

import './App.css';
import { Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import configureStore from './redux/store';

const store = configureStore();
const history = createBrowserHistory();

const MainPage = lazy(() => import('./container/MainPage'));

const commonSuspenseFunc = (SuspenseCom) => {
  return (
    <Suspense fallback={<div>loading</div>}>
      <SuspenseCom />
    </Suspense>
  )
}

class App extends React.Component {
  render() { 
    return (
      <div className="mainApp">
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <Switch>
              <Route
                path="/"
                component={() => commonSuspenseFunc(MainPage)}
              />
            </Switch>
          </ConnectedRouter>
        </Provider>
      </div>
    )
  }
}

export default App;
