import React from 'react';
import Hero from './hero/Hero';
import About from './about/About';
import Services from './services/Services';
import Projects from './projects/Project';
import Testimonials from './testimonials/Testimonial';
import Contact from './Contact';
import Footer from './Footer';

const Home = () => {
  return (
    <div className='px-[10vw]'>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
