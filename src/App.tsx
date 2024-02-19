import React from 'react';
import RootStore, { persistor } from "./Redux/RootStore";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import './App.css';
import BoardView from './View/BoardView';


function App() {

  return (
    <Provider store={RootStore}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <BoardView></BoardView>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
