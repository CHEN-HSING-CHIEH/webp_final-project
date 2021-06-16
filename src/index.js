import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import './index.css';
import './MessageBoard.css';
import App from './App';
import MessageApp from './MessageApp'
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Usergithub from './chen'
import './video.css'


ReactDOM.render(
  <BrowserRouter>
    <Switch>

      <App />,
      <MessageApp/>,
     
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);  

reportWebVitals();