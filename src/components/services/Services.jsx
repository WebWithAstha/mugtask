import React from 'react';
import ServiceCard from './ServiceCard';
import SectionTitle from '../partials/SectionTitle';
import second from '../../assets/images/vector1.jpg'


const Services = () => (
  <section className="dark:bg-black bg-white  dark:text-white py-12">
    <SectionTitle title="Services" subtitle={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ipsum numquam nisi ducimus eveniet facere hic architecto modi reprehenderit adipisci."} />
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      <ServiceCard icon={second} title="UX Design" description="Creating user-friendly designs for websites and apps." />
      <ServiceCard icon="/path-to-icon2.jpg" title="Web Design" description="Designing responsive and modern websites." />
      <ServiceCard icon="/path-to-icon2.jpg" title="App Design" description="Designing responsive and modern websites." />
      <ServiceCard icon="/path-to-icon3.jpg" title="Graphic Design" description="Crafting visually appealing graphics for branding." />
    </div>
  </section>
);

export default Services;
