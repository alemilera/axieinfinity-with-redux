import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Users from './components/users';

import {Provider} from 'react-redux';
import generateStore from './redux/store';
import Player from './components/player/Player';

import './styles/App.css';


function App() {
   
  const store = generateStore();
  return (
    
      <Provider store = {store}>
        <Users/>  
        <Player/>
      </Provider>
    
  );
}

export default App;
