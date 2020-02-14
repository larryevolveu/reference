import React from 'react';
import logo from './logo.svg';
import './App.css';
import POJO from './components/POJO';
import FuncComp from './components/FuncComp';
import ClassComp from './components/ClassComp';

function App() {

  const asdf = "What Ever";

  // console.log("in the App");

  function newFunction(a) {
    console.log("I'm in newFunction at the App level");
    console.log("and what you sent me was:", a);
  }

  POJO.doSomething('$1,000,000');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          LeArN React
        </a>
      </header>
      {POJO.getLastStuff()} <p/>
      <FuncComp parm="What Ever" func={newFunction}/> <br/>
      <ClassComp/> <p/>
    </div>
  );
}

export default App;
