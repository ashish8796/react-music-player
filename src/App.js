import React from 'react';
import './App.css';
import { store } from './store/store';
import { Provider } from 'react-redux';
import Navigator from './Navigator';

function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}

export default App;
