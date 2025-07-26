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
        <Header />
      </header>

      <main className="pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Banner */}
        <section>
          <Banner />
        </section>

        {/* About */}
        <section id="about">
          <About />
        </section>

        {/* Skills */}
        <section id="skills">
          <Skill />
        </section>

        {/* Projects */}
        <section id="projects">
          <Project />
        </section>

        {/* Contact */}
        <section id="contact">
          <Contact />
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
