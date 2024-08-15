import React from 'react';
import Hero from './hero/Hero';
import About from './about/About';
import Services from './services/Services';
import Projects from './projects/Project';
import Testimonials from './testimonials/Testimonial';
import Contact from './Contact';
import Footer from './Footer';
import Navbar from './partials/nav/Navbar';

const Home = () => {
  return (
    <div className=''>
      <Navbar/>
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
