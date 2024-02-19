import React from 'react';
import RootStore from "./Redux/RootStore";
import { Provider } from "react-redux";
import './App.css';
import BoardView from './View/BoardView';


function App() {

  return (
    <Provider store={RootStore}>
      <BoardView></BoardView>
    </Provider>
  );
}

export default App;
