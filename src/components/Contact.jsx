import React, { useEffect } from 'react';
import SectionTitle from './partials/SectionTitle';
import Button from './partials/Button';

const Contact = () => {
  return (
    <section className="dark:bg-black bg-white px-[10vw] dark:text-white py-16">
      <div className="container mx-auto text-center flex flex-col items-center">
      <SectionTitle title="Let's Design Together"  subtitle={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ipsum numquam nisi ducimus eveniet facere hic architecto modi reprehenderit adipisci."} />

       <form className="flex gap-4 items-center justify-center">
          <input
            type="email"
            placeholder="Your Email"
            className="flex-1 w-full md:w-[23vw] md:text-sm text-xs py-2 px-4 rounded-lg  dark:bg-zinc-700 bg-zinc-100 border-2 focus:outline-none"
          />
          <Button text="Submit"/>
        </form>
      </div>
    </section>
  );
};

export default Contact;
