import React from 'react';
import './App.css';
import { store } from './store/store';
import { Provider } from 'react-redux';
import Navigator from './Navigator';
import ProxyPlayer from './Components/ProxyPlayer';

function App() {
  return (
    <Provider store={store}>
      <Navigator />
      <ProxyPlayer />
    </Provider>
  );
}

export default App;
