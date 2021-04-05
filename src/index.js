import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app/App";
import {reducer} from "./store/reducer";
import {configureStore} from "@reduxjs/toolkit";
import {createAPI} from "./store/api/api";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom"

import './index.scss';

const api = createAPI(() => {});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      thunk: {
        extraArgument: api
      }
    })
})

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
