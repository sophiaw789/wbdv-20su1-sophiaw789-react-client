import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
/*import hello from './reducers/hello'
import HelloContainer from "./Hello"
import counterReducer from "./reducers/counterReducer";
import CounterComponent from "./components/CounterComponent";*/
import moduleReducer from './reducers/moduleReducer'
import lessonReducer from './reducers/lessonReducer'
import widgetReducer from './reducers/widgetReducer'
import topicReducer from './reducers/topicReducer'
//import ModuleListComponent from './components/ModuleListComponent'
//import ModuleListContainer from './containers/ModuleListContainer'
// import {wer, ert} from './components/ModuleListContainer;

const reducers = combineReducers({
  moduleReducer, lessonReducer, widgetReducer, topicReducer
})

const store = createStore(reducers)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      {/*<CounterComponent/>}
      {/*<HelloContainer />*/}
      {/*<HelloWorld messageProperty={'Hello World'} />*/}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
