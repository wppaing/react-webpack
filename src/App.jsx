import { lazy } from 'react';

const App = () => {
  const appConfigId = process.env.APPLICATION_CONFIG_ID;

  if (appConfigId === 1) {
    return lazy(() => import('./config/MainApp'));
  } else if (appConfigId === 2) {
    return lazy(() => import('./config/TestApp'));
  } else {
    return null;
  }
};

export default App;
