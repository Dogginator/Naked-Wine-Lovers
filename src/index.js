import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import reportWebVitals from './reportWebVitals';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import allReducers from './reducers';
import { Provider } from 'react-redux';


//const rootReducer = combineReducers({
//  form: formReducer
//})
const client = new ApolloClient({
  uri: "https://api-eu-central-1.graphcms.com/v2/cknxm2lmmxx7u01ytczj5e2l5/master"
});

const store = createStore(allReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
