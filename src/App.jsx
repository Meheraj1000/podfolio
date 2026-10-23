import React from 'react';
import Header from './Header';
import Banner from './page/Banner';
import About from './page/About';
import Skill from './page/Skill';
import Github from './page/Github';
import Project from './page/Project';
import Faq from './page/Faq';
import Contact from './Contact';
import Footer from './Footer';

const App = () => {
  return (
    <>
      <Header />
      <main className="site-main">
        <Banner />
        <About showHeader={false} />
        <Skill showHeader={false} />
        <Github />
        <Project showHeader={false} />
        <Faq />
        <Contact showHeader={false} />
      </main>
      <Footer />
    </>
  );
};

export default App;
