import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SportsList from './SportsList/SportsList';
import ToDoApp from './ToDoApp/ToDoApp';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import { Reducer } from './ToDoApp/Reducer.js';
import { createStore } from 'redux';

const store = createStore(Reducer);
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/sportsList" component={SportsList} />
        <Provider store={store}>
          <Route path="/toDo" component={ToDoApp} />
        </Provider>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
