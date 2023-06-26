import React from 'react';
import './App.css';
import {Header} from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import AboutMe from "./aboutMe/aboutMe";

function App() {
  return (
      <div className={'App'}>
          <Header />
          <Main  />
          <AboutMe />
          <Skills />

      </div>
  )
}

export default App;
