import React from 'react';
import SectionTitle from '../partials/SectionTitle';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => (
  <section className="dark:bg-black bg-white  dark:text-white py-12">
    <SectionTitle title="Testimonials"  subtitle={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ipsum numquam nisi ducimus eveniet facere hic architecto modi reprehenderit adipisci."} />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <TestimonialCard image="/path-to-person1.jpg" name="Client One" quote="Muhammad did an excellent job designing our website." />
      <TestimonialCard image="/path-to-person2.jpg" name="Client Two" quote="Highly professional and creative in his work." />
    </div>
  </section>
);

export default Testimonials;
