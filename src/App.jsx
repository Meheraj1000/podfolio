import React from 'react';
import Header from './Header';
import Banner from './page/Banner';
import About from './page/About';
import Skill from './page/Skill';
import Project from './page/Project';
import Contact from './Contact';
import Footer from './Footer';

const App = () => {
  return (
    <>
    <header>
      <Header></Header>
    </header>
     <main className="pt-16"> {/* pt-16 offsets the fixed navbar height */}
        <Banner />
        <About />
        <Skill></Skill>
        <Project></Project>
        <Contact></Contact>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};

export default App;