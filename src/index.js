import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import { ApolloProvider } from 'react-apollo';

import App    from './App';
import client from './Config/config';

const Main =
  <ApolloProvider client={client}>
    <App/>
  </ApolloProvider>
;

ReactDOM.render(Main, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
