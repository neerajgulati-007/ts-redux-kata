import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
      </div>
    </Provider>
  );
}

export default App;
