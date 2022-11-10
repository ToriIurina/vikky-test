import React from 'react';
import './App.scss';

import {DeskHeader} from "../Desk-header";
import {MobileHeader} from "../Mobile-header";
import {Banner} from "../Banner";
import {Footer} from "../Footer";
import {MainContent} from "../Main-content";


function App() {
  return (
    <section className="app">
      <DeskHeader/>
      <MobileHeader/>
      <Banner/>
      <MainContent/>
      <Footer/>
    </section>
  );
}

export default App;
