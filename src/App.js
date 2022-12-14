import React from 'react';
import { Provider } from 'react-redux';
import { store } from './slices';
import { Router } from './Router';

const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
