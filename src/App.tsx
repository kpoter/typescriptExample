import React from 'react';
import { Provider } from "react-redux";
import './App.css';
import BoardView from './View/BoardView';


function App() {
  return (
    // <Provider store={ '123'}>
    <BoardView></BoardView>
    // </Provider>
  );
}

export default App;
