import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Web } from './Pages';
import { Navbar } from './components';
import login from './login'
import MessageApp from './MessageApp'
import video from './video'
import chenApp from './chenApp'
import miaoApp from './miaoApp';


class App extends Component {
  render() {
    return (
      <div className="container">
        {/* Put Navbar Here */}
        <Navbar />
        <Route path="/login"  exact component={login} />
        <Route path="/" exact component={video} />
        <Route path="/MessageBoard" exact component={MessageApp} />
        <Route path="/Web" component={ Web } />
        <Route path="/Web/chenWeb" component={chenApp}></Route>
        <Route path="/Web/miaoWeb" component={miaoApp}>
        <miao source="https://api.github.com/users/CHEN-HSING-CHIEH"></miao>
        </Route>
      </div>
    );
  }
}

export default App;