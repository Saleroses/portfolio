import React from 'react';
import './App.css';
import {Header} from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import AboutMe from "./aboutMe/aboutMe";
import Works from "./works/Works";

function App() {
  return (
      <div className={'App'}>
          <Header />
          <Main  />
          <AboutMe />
          <Skills />
          <Works />

      </div>
  )
}

export default App;
